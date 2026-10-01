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

function changeTheme(imagePath, defaultEnvColor, defaultTextColor, defaultAccent) {
    document.getElementById('previewBackground').style.backgroundImage = `url('${imagePath}')`;
    
    updateEnvelopeColor(defaultEnvColor);
    updateTextColor(defaultTextColor);
    updateAccentColor(defaultAccent);
    
    document.getElementById('envelopeColorPicker').value = defaultEnvColor;
    document.getElementById('textColorPicker').value = defaultTextColor;
    document.getElementById('accentColorPicker').value = defaultAccent;
}

function updateEnvelopeColor(color) {
    document.documentElement.style.setProperty('--envelope-bg', color);
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

function updateFileName(input, labelId) {
    const label = document.getElementById(labelId);
    if (input.files && input.files[0]) {
        label.innerText = "تم الرفع: " + input.files[0].name;
        label.style.color = "#e6c594";
        label.style.borderColor = "#e6c594";
    }
}

function openEnvelope() {
    const envelope = document.getElementById('envelopeBox');
    envelope.classList.add('open');
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
