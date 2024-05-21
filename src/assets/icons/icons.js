import {
  MdFormatAlignCenter,
  MdFormatAlignJustify,
  MdFormatAlignLeft,
  MdFormatAlignRight,
  MdFormatListNumbered,
  MdFormatListBulleted,
  MdOutlineFormatItalic,
  MdOutlineFormatUnderlined,
  MdOutlineFormatBold,
  MdFormatColorFill,
  MdUploadFile,
  MdDeleteOutline,
  MdStarBorder,
  MdPrint,
  MdMenu,
} from 'react-icons/md';

export const editorIcons = [
  { id: 7, name: 'Bold', icon: MdOutlineFormatBold },
  { id: 8, name: 'Italic', icon: MdOutlineFormatItalic },
  { id: 9, name: 'Underlign', icon: MdOutlineFormatUnderlined },
  { id: 10, name: 'Color', icon: MdFormatColorFill },
  { id: 1, name: 'Align Left', icon: MdFormatAlignLeft },
  { id: 2, name: 'Align Center', icon: MdFormatAlignCenter },
  { id: 3, name: 'Align Right', icon: MdFormatAlignRight },
  { id: 4, name: 'Align Justify', icon: MdFormatAlignJustify },
  { id: 5, name: 'List Numbered', icon: MdFormatListNumbered },
  { id: 6, name: 'List Bulleted', icon: MdFormatListBulleted },
];

export const upldOrDelIcons = [
  { id: 1, name: 'Upload File', icon: MdUploadFile },
  { id: 2, name: 'Delete Message', icon: MdDeleteOutline },
];

export const emailPgHdrIcons = [
  { id: 1, name: 'Star', icon: MdStarBorder },
  { id: 2, name: 'Print', icon: MdPrint },
  { id: 3, name: 'Delete Message', icon: MdDeleteOutline },
  { id: 4, name: 'Menu', icon: MdMenu },
];
