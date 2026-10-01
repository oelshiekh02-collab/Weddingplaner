function openDemoModal(templateType, names, locationText) {
    const modal = document.getElementById('demoModal');
    const env = document.getElementById('envScreen');
    const sealIcon = document.getElementById('sealIcon');
    const cardNames = document.getElementById('cardNames');
    const cardLocation = document.getElementById('cardLocation');
    
    // إعادة ضبط الظرف مغلق
    env.classList.remove('open');
    
    // تخصيص الأيقونة والبيانات حسب القالب
    if(templateType === 'swan') {
        sealIcon.innerText = "🦢";
    } else if(templateType === 'gold') {
        sealIcon.innerText = "💍";
    } else {
        sealIcon.innerText = "🌹";
    }

    cardNames.innerText = names;
    cardLocation.innerText = "📍 " + locationText;

    modal.style.display = 'flex';
}

function closeDemoModal() {
    document.getElementById('demoModal').style.display = 'none';
}

function openEnv() {
    const env = document.getElementById('envScreen');
    env.classList.add('open');

    // تشغيل صوت تزييق الفتح الحقيقي
    const sound = document.getElementById('creakSound');
    if(sound) {
        sound.currentTime = 0;
        sound.play().catch(e => console.log("التفاعل يتطلب تفعيل الصوت المتصفح"));
    }
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        }
