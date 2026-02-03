// T3000 Deck Importer - Figma Plugin Code
// Creates Figma frames from exported T3000 deck data

figma.showUI(__html__, { width: 400, height: 500 });

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'import') {
    try {
      await importDeck(msg.data);
    } catch (error) {
      figma.ui.postMessage({
        type: 'error',
        message: error.message
      });
    }
  }
};

async function importDeck(data) {
  const { frames, designTokens, meta } = data;

  // Create parent frame to hold all slides
  const parentFrame = figma.createFrame();
  parentFrame.name = `T3000 Deck - ${meta.exportDate}`;
  parentFrame.layoutMode = 'HORIZONTAL';
  parentFrame.primaryAxisSizingMode = 'AUTO';
  parentFrame.counterAxisSizingMode = 'AUTO';
  parentFrame.itemSpacing = 100;
  parentFrame.paddingLeft = 100;
  parentFrame.paddingRight = 100;
  parentFrame.paddingTop = 100;
  parentFrame.paddingBottom = 100;

  // Import frames
  let completedCount = 0;
  for (const frameData of frames) {
    await createFrame(frameData, designTokens, parentFrame);
    completedCount++;

    figma.ui.postMessage({
      type: 'progress',
      percent: (completedCount / frames.length) * 100,
      message: `Creating slide ${completedCount} of ${frames.length}...`
    });
  }

  // Zoom to fit
  figma.viewport.scrollAndZoomIntoView([parentFrame]);

  figma.ui.postMessage({
    type: 'complete',
    count: frames.length
  });
}

async function createFrame(frameData, tokens, parent) {
  const frame = figma.createFrame();
  frame.name = frameData.name;
  frame.resize(frameData.width, frameData.height);
  frame.x = frameData.x;
  frame.y = frameData.y;

  // Set background
  if (frameData.backgroundColor) {
    frame.fills = [{
      type: 'SOLID',
      color: frameData.backgroundColor
    }];
  }

  // Set layout
  if (frameData.layoutMode) {
    frame.layoutMode = frameData.layoutMode;
    frame.primaryAxisSizingMode = frameData.primaryAxisSizingMode || 'AUTO';
    frame.counterAxisSizingMode = frameData.counterAxisSizingMode || 'AUTO';
    frame.paddingLeft = frameData.paddingLeft || 0;
    frame.paddingRight = frameData.paddingRight || 0;
    frame.paddingTop = frameData.paddingTop || 0;
    frame.paddingBottom = frameData.paddingBottom || 0;
    frame.itemSpacing = frameData.itemSpacing || 0;
  }

  // Create children
  if (frameData.children) {
    for (const childData of frameData.children) {
      await createNode(childData, frame, tokens);
    }
  }

  parent.appendChild(frame);
  return frame;
}

async function createNode(nodeData, parent, tokens) {
  if (nodeData.type === 'TEXT') {
    return await createTextNode(nodeData, parent);
  } else if (nodeData.type === 'FRAME') {
    return await createFrame(nodeData, tokens, parent);
  }
  // Add more node types as needed
}

async function createTextNode(nodeData, parent) {
  const textNode = figma.createText();

  // Load font
  await figma.loadFontAsync({
    family: nodeData.style.fontFamily || 'Inter',
    style: 'Regular'
  });

  // Set text
  textNode.characters = nodeData.characters;
  textNode.name = nodeData.name;

  // Set style
  if (nodeData.style) {
    textNode.fontSize = nodeData.style.fontSize || 16;

    if (nodeData.style.fontWeight) {
      const weightMap = {
        300: 'Light',
        400: 'Regular',
        500: 'Medium',
        600: 'Semi Bold',
        700: 'Bold'
      };
      const style = weightMap[nodeData.style.fontWeight] || 'Regular';
      await figma.loadFontAsync({
        family: nodeData.style.fontFamily || 'Inter',
        style
      });
      textNode.fontName = {
        family: nodeData.style.fontFamily || 'Inter',
        style
      };
    }

    if (nodeData.style.textAlignHorizontal) {
      textNode.textAlignHorizontal = nodeData.style.textAlignHorizontal;
    }

    if (nodeData.style.lineHeightPx) {
      textNode.lineHeight = { value: nodeData.style.lineHeightPx, unit: 'PIXELS' };
    }

    if (nodeData.style.fills) {
      textNode.fills = nodeData.style.fills;
    }
  }

  // Set layout properties
  if (nodeData.layoutAlign) {
    textNode.layoutAlign = nodeData.layoutAlign;
  }

  parent.appendChild(textNode);
  return textNode;
}

function parseColor(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16) / 255,
    g: parseInt(result[2], 16) / 255,
    b: parseInt(result[3], 16) / 255
  } : { r: 1, g: 1, b: 1 };
}
