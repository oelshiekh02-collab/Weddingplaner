// 1. تغيير الخلفية عند اختيار قالب جديد
function changeTheme(imagePath, defaultEnvColor, defaultTextColor) {
    document.getElementById('previewBackground').style.backgroundImage = `url('${imagePath}')`;
    
    // تحديث الألوان التلقائية للقالب المختارة
    updateEnvelopeColor(defaultEnvColor);
    updateTextColor(defaultTextColor);
    
    // تحديث قيم الـ Color Pickers
    document.getElementById('envelopeColorPicker').value = defaultEnvColor;
    document.getElementById('textColorPicker').value = defaultTextColor;
}

// 2. التحكم في لون الظرف ديناميكياً
function updateEnvelopeColor(color) {
    document.documentElement.style.setProperty('--envelope-bg', color);
}

// 3. التحكم في لون الخطوط والنصوص ديناميكياً
function updateTextColor(color) {
    document.documentElement.style.setProperty('--text-color', color);
}

// 4. تغيير الخط
function changeFont(fontFamily) {
    document.documentElement.style.setProperty('--main-font', fontFamily);
}

// 5. فتح الظرف عند الضغط عليه
function openEnvelope() {
    const envelope = document.getElementById('envelopeBox');
    envelope.classList.add('open');
}
