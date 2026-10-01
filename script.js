function openDemoModal(templateType) {
    const modal = document.getElementById('demoModal');
    const env = document.getElementById('envScreen');
    const sealIcon = document.getElementById('sealIcon');
    
    // إعادة ضبط الظرف مغلق عند فتحه كل مرة
    env.classList.remove('open');
    
    if(templateType === 'swan') {
        sealIcon.innerText = "🦢";
    } else if(templateType === 'gold') {
        sealIcon.innerText = "💍";
    } else {
        sealIcon.innerText = "🌿";
    }

    modal.style.display = 'flex';
}

function closeDemoModal() {
    document.getElementById('demoModal').style.display = 'none';
}

function openEnv() {
    const env = document.getElementById('envScreen');
    env.classList.add('open');

    // تشغيل صوت فتح الباب/الظرف
    const sound = document.getElementById('creakSound');
    if(sound) {
        sound.play().catch(e => console.log("التشغيل يتطلب تفاعل المستخدم"));
    }
}
