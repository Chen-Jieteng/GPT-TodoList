# GPT-TodoList

GPT-TodoList is a web application that combines a TodoList and daily scheduler with ChatGPT-3.5. Manage your tasks effectively and get creative insights from GPT-3.5 while planning your day. 

The program lanaguage will be Simplified Chinese, but I'll also release multi-lang options at the end.

- [中文](./zh/README.md)
- [English](./README.md)
- [日本語](./jp/README.md)

## Updates: 
- Planning to complete the project before 2023/4/30, It's late but I need to prepare for final exams and graduation first.
- package jsons won't be uploaded 'til the end 

## Features

- Left side: TodoList & Daily Schedule
  - Add, edit, delete tasks
  - Three methods for adding tasks
  - Drag tasks to adjust order & update times
  - Organize tasks by completion status
  - Reflect on achievements, thoughts & quotes
  - Record improvement suggestions
  - Expandable & rearrangeable widgets
  - Daily reviews with multiple segments
  - Custom Pomodoro time & modes (relaxed/focused)
  - Time module updates for international tasks

- Right side: ChatGPT Widget
  - Chat with GPT-3.5/4 (custom input API)
  - GPT generates tasks from conversation
  - Automatic GPT analysis for daily reviews
  - Creative suggestions & insights to improve planning

## Installation
1. Clone the repository:
```
git clone https://github.com/Chen-Jieteng/GPT-TodoList.git
cd GPT-TodoList
```

2. Install dependencies:
```
npm install
```

3. Start the development server:
```
npm run dev
```

## Deployment
To build the application for production, run:
```
npm run build
```

This will generate the dist folder, which you can deploy to your preferred hosting provider.

## License
This project is licensed under the MIT License.
