function updateGroomName(val) {
    document.getElementById('displayGroom').innerText = val || 'أحمد';
}

function updateBrideName(val) {
    document.getElementById('displayBride').innerText = val || 'سارة';
}

function updateDate(val) {
    document.getElementById('displayDate').innerText = val;
}

function updateCustomMsg(val) {
    document.getElementById('displayCustomMsg').innerText = val || 'لتهنئتكم ومشاركتنا أجمل لحظات العمر';
}

function applyPreset(envColor, cardBg, textColor, accentColor) {
    updateEnvelopeColor(envColor);
    updateCardBgColor(cardBg);
    updateTextColor(textColor);
    updateAccentColor(accentColor);
    
    document.getElementById('envelopeColorPicker').value = envColor;
    document.getElementById('cardBgColorPicker').value = cardBg;
    document.getElementById('textColorPicker').value = textColor;
    document.getElementById('accentColorPicker').value = accentColor;
}

function updateEnvelopeColor(color) {
    document.documentElement.style.setProperty('--envelope-bg', color);
    document.getElementById('previewBackground').style.backgroundColor = color;
}

function updateCardBgColor(color) {
    document.documentElement.style.setProperty('--card-bg', color);
}

function updateTextColor(color) {
    document.documentElement.style.setProperty('--card-text-color', color);
}

function updateAccentColor(color) {
    document.documentElement.style.setProperty('--accent-color', color);
}

function changeFont(fontFamily) {
    document.documentElement.style.setProperty('--card-font', fontFamily);
}

function handleAudioUpload(input) {
    const label = document.getElementById('audioLabel');
    if (input.files && input.files[0]) {
        label.innerText = "تم الرفع: " + input.files[0].name;
        label.style.color = "#D4AF37";
        label.style.borderColor = "#D4AF37";

        const audioElem = document.getElementById('bgMusic');
        audioElem.src = URL.createObjectURL(input.files[0]);
    }
}

function updateFileName(input, labelId) {
    const label = document.getElementById(labelId);
    if (input.files && input.files[0]) {
        label.innerText = "تم الرفع: " + input.files[0].name;
        label.style.color = "#D4AF37";
        label.style.borderColor = "#D4AF37";
    }
}

function openEnvelopeWithMusic() {
    const envelope = document.getElementById('envelopeBox');
    envelope.classList.add('open');

    const audioElem = document.getElementById('bgMusic');
    if (audioElem.src) {
        audioElem.play().catch(error => {
            console.log("التشغيل التلقائي يتطلب تفاعل المستخدم وتم بنجاح عبر الضغط.");
        });
    }
}

function submitOrder() {
    const groom = document.getElementById('inputGroom').value;
    const bride = document.getElementById('inputBride').value;
    const receipt = document.getElementById('receiptUpload').files.length;

    if (!groom || !bride) {
        alert('الرجاء إدخال أسماء العروسين أولاً.');
        return;
    }

    if (receipt === 0) {
        alert('يرجى رفع صورة إيصال التحويل لتأكيد الطلب.');
        return;
    }

    alert('تم إرسال طلب دعوة "Eternal Vows" بنجاح! سيتم تجهيز رابط الدعوة الخاص بك.');
}
