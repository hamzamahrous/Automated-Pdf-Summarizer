# automated-pdf-summarizer
This project is an automated lecture notes collector that integrates with Google Drive through n8n to detect newly uploaded lecture files. Once a file is added, an AI-powered workflow processes the document and generates a summary.

The summaries are then pushed to the Angular frontend in real-time using WebSockets, eliminating the need for manual refresh or polling.

The frontend is built with PrimeNG components for a clean and interactive UI, including responsive cards, notifications (toasts), and structured layouts for displaying lecture details.

Key features:

- Automation with n8n: Listens for file uploads on Google Drive and triggers the workflow automatically.
- AI Summarization: Extracts and summarizes lecture content.
- Real-time Updates: Uses WebSockets to stream new summaries instantly to the frontend.
- Modern UI: Built with Angular + PrimeNG for polished and user-friendly presentation.


Workflow:
<img width="1251" height="692" alt="image" src="https://github.com/user-attachments/assets/f50bc27a-5d6c-45f6-9cf9-f5f93f2874a3" />

