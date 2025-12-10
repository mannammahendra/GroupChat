// AutoReplySystem.js
// This module handles automatic replies based on keyword matching.
// You can integrate it with your chat backend or message handler.

interface FileObject {
  name: string;
  uri: string;
  type: string;
}

interface Message {
  text: string;
}

interface AutoReplyCallback {
  (reply: { type: string; file: FileObject; timestamp: number; sender: string }): void;
}

const predefinedReplies: { [key: string]: FileObject } = {
  "help": { name: "HelpGuide.pdf", uri: "assets/help.pdf", type: "application/pdf" },
  "welcome": { name: "WelcomeImage.jpg", uri: "assets/welcome.jpg", type: "image/jpeg" }
};

export default class AutoReplySystem {
  replyMap: { [key: string]: FileObject };

  constructor() {
    // Load predefined keyword → response file mapping
    this.replyMap = predefinedReplies || {};
  }

  // Register a new keyword and system file response
  registerKeyword(keyword: string, fileObject: FileObject) {
    this.replyMap[keyword.toLowerCase()] = fileObject;
  }

  // Check incoming message and return auto-reply file (if matched)
  checkForAutoReply(messageText: string): FileObject | null {
    if (!messageText) return null;

    const lower = messageText.toLowerCase();

    // Find matching keyword
    for (let key in this.replyMap) {
      if (lower.includes(key)) {
        return this.replyMap[key]; // fileObject includes { name, uri, type }
      }
    }

    return null; // No match
  }

  // Example handler you can plug into message receiving flow
  handleIncomingMessage(message: Message, onAutoReply: AutoReplyCallback) {
    const autoFile = this.checkForAutoReply(message.text);

    if (autoFile) {
      onAutoReply({
        type: 'file',
        file: autoFile,
        timestamp: Date.now(),
        sender: 'system'
      });
    }
  }
}
