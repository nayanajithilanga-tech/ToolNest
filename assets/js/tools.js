// Shared Utility Functions for Tools
const ToolsUtil = {
    showError: function(elementId, message) {
        const el = document.getElementById(elementId);
        if(el) {
            el.innerHTML = `<span style="color: #ef4444;">Error: ${message}</span>`;
        }
    },
    clearOutput: function(elementId) {
        const el = document.getElementById(elementId);
        if(el) el.innerHTML = '';
    },
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    downloadTextFile: function(filename, content) {
        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
};
