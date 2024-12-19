MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']]
    },
    svg: {
        fontCache: 'global'
    }
};

const storedPassword = localStorage.getItem('password');
    if (storedPassword!== 'a') {
        let enteredPassword;
        do {
            enteredPassword = prompt('请输入密码才能浏览页面：');
        } while (enteredPassword!== 'a');

        // 密码正确，将密码存储到本地存储
        localStorage.setItem('password', 'a');
    }

