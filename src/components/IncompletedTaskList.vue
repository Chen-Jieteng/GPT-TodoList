<template>
    <strong>什么没完成？</strong>
    <div>
        <li>无数据</li>
    </div>
</template>
<style> 
    .incompleted-tasklist {
      background-color:darkseagreen;
      padding: 1rem;
      border-radius: 5px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .incompleted-tasklist :hover {
      transform: translateY(-2px) scale(1.0);
      box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
    }
</style>

