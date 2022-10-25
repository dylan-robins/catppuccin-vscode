import { ThemeContext } from "../types";
import { opacity, transparent } from "./utils";

export const getUiColors = (context: ThemeContext) => {
  const { palette, options, isLatte } = context;

  return {
    foreground: palette.text,
    focusBorder: palette.blue,
    "selection.background": palette.surface2,
    "scrollbar.shadow": palette.base,
    "activityBar.foreground": palette.text,
    "activityBar.background": palette.base,
    "activityBar.inactiveForeground": palette.overlay0,
    "activityBarBadge.foreground": palette.base,
    "activityBarBadge.background": palette.blue,
    "sideBar.background": palette.mantle,
    "sideBar.foreground": palette.text,
    "sideBarSectionHeader.background": palette.base,
    "sideBarSectionHeader.foreground": palette.text,
    "sideBarTitle.foreground": palette.text,
    "list.inactiveSelectionForeground": palette.text,
    "list.hoverForeground": palette.text,
    "list.activeSelectionBackground": palette.surface1, // currently selected in file tree
    "list.inactiveSelectionBackground": palette.surface1, // currently selected focused in editor
    "list.hoverBackground": isLatte ? palette.surface2 : palette.base, // when hovering over the file tree
    "list.focusBackground": palette.surface0, // when using keyboard to move around files
    "list.activeSelectionForeground": palette.text,
    "tree.indentGuidesStroke": palette.overlay0,
    "list.dropBackground": palette.base,
    "list.highlightForeground": palette.blue,
    "list.focusForeground": palette.text,
    "list.focusOutline": transparent,
    "listFilterWidget.background": palette.surface1,
    "listFilterWidget.outline": transparent,
    "listFilterWidget.noMatchesOutline": palette.red,
    "statusBar.foreground": palette.text,
    "statusBar.background": palette.crust,
    "statusBarItem.hoverBackground": opacity(palette.text, 0.1),
    "statusBar.debuggingBackground": palette.red,
    "statusBar.debuggingForeground": palette.surface1,
    "statusBar.noFolderBackground": palette.mauve,
    "statusBar.noFolderForeground": palette.surface1,
    "statusBarItem.remoteBackground": palette.green,
    "statusBarItem.remoteForeground": palette.surface1,
    "titleBar.activeBackground": palette.base,
    "titleBar.activeForeground": palette.text,
    "titleBar.inactiveBackground": opacity(palette.base, 0.6),
    "titleBar.inactiveForeground": opacity(palette.text, 0.5),
    "titleBar.border": transparent,
    "menubar.selectionForeground": palette.text,
    "menubar.selectionBackground": palette.surface1,
    "menu.foreground": palette.text,
    "menu.background": palette.base,
    "menu.selectionForeground": palette.text,
    "menu.selectionBackground": palette.surface2,
    "menu.selectionBorder": transparent,
    "menu.separatorBackground": palette.surface2,
    "menu.border": opacity(palette.base, 0.5),
    "button.background": palette.surface2,
    "button.foreground": palette.text,
    "button.hoverBackground": palette.surface1,
    "button.secondaryForeground": palette.text,
    "button.secondaryBackground": palette.surface1,
    "button.secondaryHoverBackground": palette.base,
    "input.background": palette.surface0,
    "input.border": transparent,
    "input.foreground": palette.text,
    "inputOption.activeBackground": opacity(palette.blue, 0.15),
    "inputOption.activeBorder": transparent,
    "inputOption.activeForeground": palette.text,
    "input.placeholderForeground": opacity(palette.text, 0.45),
    "textLink.foreground": palette.blue,
    "editor.background": palette.base,
    "editor.foreground": palette.text,
    "editorLineNumber.foreground": palette.overlay1,
    "editorCursor.foreground": palette.rosewater,
    "editorCursor.background": palette.base,
    "editor.selectionBackground": palette.surface2,
    "editor.inactiveSelectionBackground": transparent,
    "editorWhitespace.foreground": opacity(palette.overlay2, 0.4),
    "editor.selectionHighlightBackground": opacity(palette.overlay2, 0.4),
    "editor.selectionHighlightBorder": opacity(palette.sky, 0.2),
    "editor.findMatchBackground": palette.surface2,
    "editor.findMatchBorder": opacity(palette.blue, 0.4),
    "editor.findMatchHighlightBackground": opacity(palette.peach, 0.35),
    "editor.findMatchHighlightBorder": transparent,
    "editor.findRangeHighlightBackground": opacity(palette.surface2, 0.3),
    "editor.findRangeHighlightBorder": transparent,
    "editor.rangeHighlightBackground": opacity(palette.sky, 0.25),
    "editor.rangeHighlightBorder": transparent,
    "editor.hoverHighlightBackground": opacity(palette.sky, 0.25),
    "editor.wordHighlightStrongBackground": palette.surface2,
    "editor.wordHighlightBackground": opacity(palette.surface2, 0.7),
    "editor.lineHighlightBackground": opacity(palette.text, 0.07),
    "editor.lineHighlightBorder": palette.base,
    "editorLineNumber.activeForeground": palette.green,
    "editorLink.activeForeground": palette.blue,
    "editorIndentGuide.background": palette.surface1,
    "editorIndentGuide.activeBackground": palette.surface2,
    "editorRuler.foreground": palette.surface2,
    "editorBracketMatch.background": opacity(palette.overlay2, 0.1),
    "editorBracketMatch.border": palette.overlay2,
    "editor.foldBackground": opacity(palette.sky, 0.25),
    "editorOverviewRuler.background": palette.mantle,
    "editorOverviewRuler.border": opacity(palette.text, 0.07),
    "editorError.foreground": palette.red,
    "editorError.background": transparent,
    "editorError.border": transparent,
    "editorWarning.foreground": palette.yellow,
    "editorWarning.background": transparent,
    "editorWarning.border": transparent,
    "editorInfo.foreground": palette.blue,
    "editorInfo.background": transparent,
    "editorInfo.border": transparent,
    "editorGutter.background": palette.base,
    "editorGutter.modifiedBackground": palette.sky,
    "editorGutter.addedBackground": palette.green,
    "editorGutter.deletedBackground": palette.red,
    "editorGutter.foldingControlForeground": palette.overlay2,
    "editorCodeLens.foreground": palette.overlay1,
    "editorGroup.border": palette.surface2,
    "diffEditor.insertedTextBackground": opacity(palette.green, 0.1),
    "diffEditor.removedTextBackground": opacity(palette.red, 0.1),
    "diffEditor.border": palette.surface2,
    "panel.background": palette.base,
    "panel.border": palette.surface2,
    "panelTitle.activeBorder": palette.text,
    "panelTitle.activeForeground": palette.text,
    "panelTitle.inactiveForeground": opacity(palette.text, 0.7),
    "badge.background": palette.surface1,
    "badge.foreground": palette.text,
    "terminal.foreground": palette.text,
    "terminal.selectionBackground": "#585b7034",
    "terminalCursor.background": palette.base,
    "terminalCursor.foreground": palette.rosewater,
    "terminal.border": palette.surface2,
    "terminal.ansiBlack": palette.overlay0,
    "terminal.ansiBlue": palette.blue,
    "terminal.ansiBrightBlack": palette.overlay1,
    "terminal.ansiBrightBlue": palette.blue,
    "terminal.ansiBrightCyan": palette.sky,
    "terminal.ansiBrightGreen": palette.green,
    "terminal.ansiBrightMagenta": palette.pink,
    "terminal.ansiBrightRed": palette.red,
    "terminal.ansiBrightWhite": palette.text,
    "terminal.ansiBrightYellow": palette.yellow,
    "terminal.ansiCyan": palette.sky,
    "terminal.ansiGreen": palette.green,
    "terminal.ansiMagenta": palette.pink,
    "terminal.ansiRed": palette.red,
    "terminal.ansiWhite": palette.overlay2,
    "terminal.ansiYellow": palette.yellow,
    "breadcrumb.background": palette.base,
    "breadcrumb.foreground": opacity(palette.text, 0.8),
    "breadcrumb.focusForeground": palette.text,
    "editorGroupHeader.tabsBackground": palette.base,
    "tab.activeForeground": palette[options.accent],
    "tab.border": palette.mantle,
    "tab.activeBackground": palette.base,
    "tab.activeBorder": palette[options.accent],
    "tab.activeBorderTop": transparent,
    "tab.inactiveBackground": palette.mantle,
    "tab.inactiveForeground": palette.overlay0,
    "scrollbarSlider.background": opacity(palette.surface2, 0.5),
    "scrollbarSlider.hoverBackground": palette.overlay0,
    "scrollbarSlider.activeBackground": opacity(palette.surface0, 0.4),
    "progressBar.background": palette.blue,
    "widget.shadow": opacity(palette.base, 0.5),
    "editorWidget.foreground": palette.text,
    "editorWidget.background": palette.base,
    "editorWidget.resizeBorder": palette.surface2,
    "pickerGroup.border": palette.blue,
    "pickerGroup.foreground": palette.blue,
    "debugToolBar.background": palette.surface1,
    "debugToolBar.border": palette.surface2,
    "notifications.foreground": palette.text,
    "notifications.background": palette.surface1,
    "notificationToast.border": palette.surface2,
    "notificationsErrorIcon.foreground": palette.red,
    "notificationsWarningIcon.foreground": palette.yellow,
    "notificationsInfoIcon.foreground": palette.blue,
    "notificationCenter.border": palette.surface2,
    "notificationCenterHeader.foreground": palette.text,
    "notificationCenterHeader.background": palette.base,
    "notifications.border": palette.surface1,
    "gitDecoration.addedResourceForeground": palette.green,
    "gitDecoration.conflictingResourceForeground": palette.mauve,
    "gitDecoration.deletedResourceForeground": palette.red,
    "gitDecoration.ignoredResourceForeground": palette.overlay0,
    "gitDecoration.modifiedResourceForeground": palette.yellow,
    "gitDecoration.stageDeletedResourceForeground": palette.red,
    "gitDecoration.stageModifiedResourceForeground": palette.yellow,
    "gitDecoration.submoduleResourceForeground": palette.blue,
    "gitDecoration.untrackedResourceForeground": palette.green,
    "editorMarkerNavigation.background": palette.mantle,
    "editorMarkerNavigationError.background": palette.red,
    "editorMarkerNavigationWarning.background": palette.yellow,
    "editorMarkerNavigationInfo.background": palette.blue,
    "merge.currentHeaderBackground": "#158472",
    "merge.currentContentBackground": "#27403B",
    "merge.incomingHeaderBackground": "#395F8F",
    "merge.incomingContentBackground": "#243A5E",
    "merge.commonHeaderBackground": palette.surface2,
    "merge.commonContentBackground": palette.surface1,
    "editorStickyScrollHover.background": palette.surface0,
    "editorSuggestWidget.background": palette.mantle,
    "editorSuggestWidget.border": palette.surface2,
    "editorSuggestWidget.foreground": palette.text,
    "editorSuggestWidget.highlightForeground": palette.blue,
    "editorSuggestWidget.selectedBackground": palette.surface0,
    "editorHoverWidget.foreground": palette.text,
    "editorHoverWidget.background": palette.mantle,
    "editorHoverWidget.border": palette.surface2,
    "peekView.border": palette.blue,
    "peekViewEditor.background": palette.mantle,
    "peekViewEditorGutter.background": palette.mantle,
    "peekViewEditor.matchHighlightBackground": opacity(palette.peach, 0.25),
    "peekViewEditor.matchHighlightBorder": palette.peach,
    "peekViewResult.background": palette.mantle,
    "peekViewResult.fileForeground": palette.text,
    "peekViewResult.lineForeground": palette.text,
    "peekViewResult.matchHighlightBackground": opacity(palette.peach, 0.25),
    "peekViewResult.selectionBackground": palette.surface0,
    "peekViewResult.selectionForeground": palette.text,
    "peekViewTitle.background": palette.base,
    "peekViewTitleDescription.foreground": opacity(palette.subtext1, 0.7),
    "peekViewTitleLabel.foreground": palette.text,
    "icon.foreground": palette.text,
    "checkbox.background": palette.surface1,
    "checkbox.foreground": palette.text,
    "checkbox.border": palette.surface1,
    "dropdown.background": palette.surface0,
    "dropdown.foreground": palette.text,
    "dropdown.border": transparent,
    disabledForeground: palette.subtext0,
    "minimapGutter.addedBackground": palette.green,
    "minimapGutter.modifiedBackground": palette.sky,
    "minimapGutter.deletedBackground": palette.red,
    "minimap.findMatchHighlight": palette.surface2,
    "minimap.selectionHighlight": palette.surface2,
    "minimap.errorHighlight": palette.red,
    "minimap.warningHighlight": palette.yellow,
    "minimap.background": palette.base,
    "sideBar.dropBackground": palette.mantle,
    "editorGroup.emptyBackground": palette.base,
    "panelSection.border": palette.surface2,
    "statusBarItem.activeBackground": opacity(palette.text, 0.15),
    "settings.headerForeground": palette.text,
    "settings.focusedRowBackground": opacity(palette.text, 0.5),
    "walkThrough.embeddedEditorBackground": opacity(palette.base, 0.3),
    "breadcrumb.activeSelectionForeground": palette.text,
    "editorGutter.commentRangeForeground": palette.overlay2,
    "debugExceptionWidget.background": palette.surface1,
    "debugExceptionWidget.border": palette.surface2,
    "list.warningForeground": palette.yellow,
    "editorBracketHighlight.foreground1": palette.red,
    "editorBracketHighlight.foreground2": palette.peach,
    "editorBracketHighlight.foreground3": palette.yellow,
    "editorBracketHighlight.foreground4": palette.green,
    "editorBracketHighlight.foreground5": palette.sapphire,
    "editorBracketHighlight.foreground6": palette.mauve,
    "editorBracketHighlight.unexpectedBracket.foreground": palette.maroon,
  };
};