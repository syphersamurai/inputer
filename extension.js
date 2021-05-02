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

      function CapitalizedCaseFunction(str) {
        var splitStr = str.toLowerCase().split(" ");
        for (var i = 0; i < splitStr.length; i++) {
          // You do not need to check if i is larger than splitStr length, as your for does that for you
          // Assign it back to the array
          splitStr[i] =
            splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        // Directly return the joined string
        return splitStr.join(" ");
      }
      let toCapitalizedCase = CapitalizedCaseFunction(text);
      editor.edit((edit) => {
        edit.replace(editor.selection, toCapitalizedCase);
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
        let strLowerCase = str.toLowerCase();
        let replaceWithDash = strLowerCase.replace(/\s/g, "-");
        return replaceWithDash;
      }

      let replaceWithDash = replaceWithDashFunction(text);
      editor.edit((edit) => {
        edit.replace(editor.selection, replaceWithDash);
      });
    })
  );
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
