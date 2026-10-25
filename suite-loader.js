const start = async () => {
  if (!window.liubaiSuiteAdapter || window.liubaiSuiteStarted) return;
  window.liubaiSuiteStarted = true;
  try {
    const { startTodoSync } = await import('https://sange0613.github.io/project-checkin-dashboard/todo-sync/entry.js?v=todo1');
    await startTodoSync(window.liubaiSuiteAdapter);
  } catch {
    document.getElementById('saved').textContent = '● 已保存在本机 · 同步暂不可用，请刷新重试';
    window.liubaiSuiteStarted = false;
  }
};
window.addEventListener('liubai-suite-adapter-ready', start);
start();
