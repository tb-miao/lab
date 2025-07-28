function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const messageElement = document.getElementById('message');

    if (username === '' || password === '') {
        messageElement.textContent = '不能留空哦喵！';
        messageElement.style.color = 'red';
        return;
    }

    if (username === 'tbnya' && password === 'tbnya@tbmiao.dpdns.org_2011') {
        messageElement.textContent = '登录成功喵！';
        messageElement.style.color = 'green';
        window.location.href = 'dashboard.html';
    } else {
        messageElement.textContent = '用户名或密码错误喵！';
        messageElement.style.color = 'red';
    }
}
function closeWebNotice() {
    document.querySelector('.web_notice').remove();
};
document.addEventListener('contextmenu', function(event) {

    event.preventDefault();


});
// 禁止右键菜单
document.oncontextmenu = function(){ return false; };


        // 页面加载完成后尝试播放音频
        window.addEventListener('load', function() {
            const audio = document.getElementById('background-music');
            audio.muted = false; // 取消静音
            audio.play().catch(error => {
                console.error('自动播放失败: ', error);
                // 在用户交互后再次尝试播放
                document.addEventListener('click', function firstInteraction() {
                    audio.play().catch(console.error);
                    document.removeEventListener('click', firstInteraction);
                });
            });
        });

        function handleKeyPress(event) {
            if (event.key === 'Enter') {
                login();
            }
        }

        const backgroundImages = [
            './assets/images/ba01.jpg',
            './assets/images/ba03.jpg',
            './assets/images/ba08.jpg',
        ];
        let currentImageIndex = 0;

        function changeBackgroundImage() {
            document.body.style.backgroundImage = `url('${backgroundImages[currentImageIndex]}')`;
            currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
        }


        setInterval(changeBackgroundImage, 5000);
        changeBackgroundImage();

// 时间
    function siteTime(){
        window.setTimeout("siteTime()", 1000);
        var seconds = 1000;
        var minutes = seconds * 60;
        var hours = minutes * 60;
        var days = hours * 24;
        var years = days * 365;
        var today = new Date();
        var todayYear = today.getFullYear();
        var todayMonth = today.getMonth()+1;
        var todayDate = today.getDate();
        var todayHour = today.getHours();
        var todayMinute = today.getMinutes();
        var todaySecond = today.getSeconds();
        /* Date.UTC() -- 返回date对象距世界标准时间(UTC)1970年1月1日午夜之间的毫秒数(时间戳)
        year - 作为date对象的年份，为4位年份值
        month - 0-11之间的整数，做为date对象的月份
        day - 1-31之间的整数，做为date对象的天数
        hours - 0(午夜24点)-23之间的整数，做为date对象的小时数
        minutes - 0-59之间的整数，做为date对象的分钟数
        seconds - 0-59之间的整数，做为date对象的秒数
        microseconds - 0-999之间的整数，做为date对象的毫秒数 */
        var t1 = Date.UTC(2025,01,01,00,00,00); //北京时间2017-09-16 00:00:00创建网站的时间
        var t2 = Date.UTC(todayYear,todayMonth,todayDate,todayHour,todayMinute,todaySecond);
        var diff = t2-t1;
        var diffYears = Math.floor(diff/years);
        var diffDays = Math.floor((diff/days)-diffYears*365);
        var diffHours = Math.floor((diff-(diffYears*365+diffDays)*days)/hours);
        var diffMinutes = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours)/minutes);
        var diffSeconds = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours-diffMinutes*minutes)/seconds);
        document.getElementById("sitetime").innerHTML=+diffYears+"年"+diffDays+"天"+diffHours+"时"+diffMinutes+"分钟"+diffSeconds+"秒";
    }
    siteTime();
