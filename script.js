// قراءة نوع القالب إذا تم تمريره من الصفحة الرئيسية عبر الرابط
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const templateParam = urlParams.get('template');
    if(templateParam && document.getElementById('inputTemplate')) {
        document.getElementById('inputTemplate').value = templateParam;
        updateLivePreview();
    }
});

// تحديث المعاينة الحية عند الكتابة
function updateLivePreview() {
    const titleElem = document.getElementById('inputTitle');
    const namesElem = document.getElementById('inputNames');
    const locElem = document.getElementById('inputLocation');
    const templateElem = document.getElementById('inputTemplate');

    if(!titleElem) return; // لضمان عدم حدوث خطأ إذا لم تكن في صفحة التصميم

    document.getElementById('prevTitle').innerText = titleElem.value;
    document.getElementById('prevNames').innerText = namesElem.value;
    document.getElementById('prevLocation').innerText = "📍 " + locElem.value;

    const sealIcon = document.getElementById('sealIcon');
    const previewIcon = document.getElementById('previewIcon');
    const envScreen = document.getElementById('envScreen');

    // إعادة إغلاق الظرف عند أي تعديل ليجرب المستخدم فتحه مجدداً
    envScreen.classList.remove('open');

    const template = templateElem.value;
    if(template === 'swan') {
        sealIcon.innerText = "🦢";
        previewIcon.innerText = "🏛️";
        envScreen.style.background = "linear-gradient(135deg, #2d332a, #424a3c)";
    } else if(template === 'gold') {
        sealIcon.innerText = "💍";
        previewIcon.innerText = "✨";
        envScreen.style.background = "linear-gradient(135deg, #421118, #58111A)";
    } else {
        sealIcon.innerText = "🌹";
        previewIcon.innerText = "🌸";
        envScreen.style.background = "linear-gradient(135deg, #3d1c24, #522933)";
    }
}

// فتح الظرف وصوت التزييق عند الضغط حصرياً
function openEnv() {
    const env = document.getElementById('envScreen');
    if(env) {
        env.classList.add('open');
        const sound = document.getElementById('creakSound');
        if(sound) {
            sound.currentTime = 0;
            sound.play().catch(e => console.log("الصوت يتطلب تفاعل المستخدم"));
        }
    }
}
