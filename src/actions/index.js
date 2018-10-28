export const DISPLAY_PREVIEW = 'DISPLAY_PREVIEW';

export function displayPreview(editorContent){
  console.log("Action creator: ", editorContent);
  return {
    type: DISPLAY_PREVIEW,
    payload: editorContent
  };
}
