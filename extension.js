const vscode = require("vscode");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "inputer" is now active!');

  context.subscriptions.push(
    vscode.commands.registerCommand("inputer.toUpperCase", async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showErrorMessage("editor does not exist!");
        return;
      }

      const text = editor.document.getText(editor.selection);
      const toUpperCase = text.toUpperCase();
      editor.edit((edit) => {
        edit.replace(editor.selection, toUpperCase);
      });
    })
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("inputer.toLowerCase", async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showErrorMessage("editor does not exist!");
        return;
      }

      const text = editor.document.getText(editor.selection);
      const toUpperCase = text.toLowerCase();
      editor.edit((edit) => {
        edit.replace(editor.selection, toUpperCase);
      });
    })
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("inputer.toSentenceCase", async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showErrorMessage("editor does not exist!");
        return;
      }

      const text = editor.document.getText(editor.selection);

      function SentenceCaseFunction(str) {
        var splitStr = str.toLowerCase().split(" ");
        for (var i = 0; i < splitStr.length; i++) {
          splitStr[i] =
            splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        return splitStr.join(" ");
      }
      let toSentenceCase = SentenceCaseFunction(text);
      
      editor.edit((edit) => {
        edit.replace(editor.selection, toSentenceCase);
      });
    })
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("inputer.replaceWithDash", async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showErrorMessage("editor does not exist!");
        return;
      }

      const text = editor.document.getText(editor.selection);

      function replaceWithDashFunction(str) {
        let replaceWithDash = str.replace(/\s/g, "-");
        return replaceWithDash;
      }

      let replaceWithDash = replaceWithDashFunction(text);
      editor.edit((edit) => {
        edit.replace(editor.selection, replaceWithDash);
      });
    })
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("inputer.replaceWithSpaces", async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showErrorMessage("editor does not exist!");
        return;
      }

      const text = editor.document.getText(editor.selection);

      function replaceWithSpaceFunction(str) {
        let replaceWithSpace = str.replace(/-/g, " ");

        return replaceWithSpace;
      }

      let replaceWithSpace = replaceWithSpaceFunction(text);
      editor.edit((edit) => {
        edit.replace(editor.selection, replaceWithSpace);
      });
    })
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("inputer.toCamelCaseTag", async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showErrorMessage("editor does not exist!");
        return;
      }
      const text = editor.document.getText(editor.selection);

      function processText(text) {
        let result;
        let splitStr = text.toLowerCase().split(" ");
        for (var i = 0; i < splitStr.length; i++) {
          splitStr[i] =
            splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        result = splitStr.join(" ")
        return result
      }

      function toCamelCaseTagFunction(text) {
        let result;
        let pw = processText(text);
        let nextPw = `${pw.charAt(0).toLowerCase()} ${pw.substr(1)}`
        let processed = nextPw.replace(/\s/g, '')
        result = `<${processed}>`;
        return result;
      }

      let toCamelCaseTag = toCamelCaseTagFunction(text);
      editor.edit((edit) => {
        edit.replace(editor.selection, toCamelCaseTag);
      });
    })
  );
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};