const participants = [
    '三万', '橘子', '陈迪', 'Snow', '图图', '肚挺挺', '肛妹', '白白', 
    '香香', '钟意', 'momo', '周周', '香菜', '竹竹'
];

function drawLottery() {
    const userName = document.getElementById('userName').value.trim();
    if (!userName) {
        alert('请输入您的名字!');
        return;
    }

    // 排除用户自己
    const availableParticipants = participants.filter(person => person !== userName);

    if (availableParticipants.length === 0) {
        document.getElementById('drawResult').textContent = '没有其他人可以抽签！';
        return;
    }

    const drawnPerson = availableParticipants[Math.floor(Math.random() * availableParticipants.length)];
    document.getElementById('drawResult').textContent = `您抽中了: ${drawnPerson}`;
}
