// 1. تحديث اسم العريس لايف
function updateGroomName(val) {
    document.getElementById('displayGroom').innerText = val || 'أحمد';
}

// 2. تحديث اسم العروس لايف
function updateBrideName(val) {
    document.getElementById('displayBride').innerText = val || 'سارة';
}

// 3. تحديث تاريخ الحفل لايف
function updateDate(val) {
    document.getElementById('displayDate').innerText = val;
}

// 4. تغيير القالب والصور الافتراضية للألوان
function changeTheme(imagePath, defaultEnvColor, defaultTextColor) {
    document.getElementById('previewBackground').style.backgroundImage = `url('${imagePath}')`;
    
    updateEnvelopeColor(defaultEnvColor);
    updateTextColor(defaultTextColor);
    
    document.getElementById('envelopeColorPicker').value = defaultEnvColor;
    document.getElementById('textColorPicker').value = defaultTextColor;
}

// 5. تحديث لون الظرف/الغلاف
function updateEnvelopeColor(color) {
    document.documentElement.style.setProperty('--envelope-bg', color);
}

// 6. تحديث لون النصوص والإطارات
function updateTextColor(color) {
    document.documentElement.style.setProperty('--text-color', color);
}

// 7. تغيير نمط الخط
function changeFont(fontFamily) {
    document.documentElement.style.setProperty('--main-font', fontFamily);
}

// 8. حركة فتح الظرف عند الضغط
function openEnvelope() {
    const envelope = document.getElementById('envelopeBox');
    envelope.classList.add('open');
}

// 9. زر إرسال الطلب وحفظ البيانات
function submitOrder() {
    const groom = document.getElementById('inputGroom').value;
    const bride = document.getElementById('inputBride').value;
    const receipt = document.getElementById('receiptUpload').files.length;

    if (!groom || !bride) {
        alert('الرجاء إدخال أسماء العروسين أولاً.');
        return;
    }

    if (receipt === 0) {
        alert('يرجى رفع صورة إيصال التحويل لتأكيد طلب الدعوة.');
        return;
    }

    alert('تم إرسال طلب تصميم دعوة "Eternal Vows" بنجاح! سيتم مراجعة إيصال التحويل وتجهيز رابط الدعوة الخاص بك قريباً.');
}
