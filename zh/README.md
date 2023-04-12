# GPT-TodoList

GPT-TodoList是一款结合了TodoList和每日日程安排的Web应用程序，并集成了ChatGPT-3.5。在计划您的一天时，有效地管理您的任务，并从GPT-3.5中获得创意性的见解。


- [中文](./zh/README.md)
- [English](./README.md)
- [日本語](./jp/README.md)

## 主要功能

- 左侧：TodoList和每日日程安排
  - 添加、编辑和删除任务
    - 添加：三种方法（用户自定义，用户输入自动分析，GPT分析自动生成）
  - 根据完成状态和未完成原因组织任务
  - 反思每日成就、想法和发人深省的引语
  - 记录改进建议
  - 部件Expandable功能，部件可拖动及调整顺序
  - 每日复盘：不同于传统App；可将一天分为多段，即每日允许多次复盘
  - 用户自定义

- 右侧：ChatGPT-3.5
  - 与GPT-3.5进行对话
  - GPT自动分析对话描述，生成任务并输入至左侧TodoList部件
  - 每日复盘详细会在确认完成后自动输入至GPT分析，有助获得创意性的建议和见解，以改进您的每日计划


## 安装
1. 克隆存储库：
```
git clone https://github.com/Chen-Jieteng/GPT-TodoList.git
cd GPT-TodoList
```

2. 安装依赖项：
```
npm install
```

3. 启动开发服务器：
```
npm run dev
```

## 部署
要将应用程序构建为生产环境，请运行：
```
npm run build
```

这将生成dist文件夹，您可以将其部署到首选的托管提供商。

## 许可证
该项目根据MIT许可证获得许可。
