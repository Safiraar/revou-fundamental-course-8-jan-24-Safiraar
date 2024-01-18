document.getElementById('btnPersegi').classList.add('active');

function showPersegi() {
    document.getElementById('persegi').style.display = 'block';
    document.getElementById('PersegiPanjang').style.display = 'none';
    document.getElementById('options').querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
    document.getElementById('btnPersegi').classList.add('active');
}

function showPersegiPanjang() {
    document.getElementById('PersegiPanjang').style.display = 'block';
    document.getElementById('persegi').style.display = 'none';
    document.getElementById('options').querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
    document.getElementById('btnPersegiPanjang').classList.add('active');
    document.getElementById('content').appendChild(document.getElementById('persegiPanjang'));
}

// ... Rest of the existing JavaScript code ...


function hitungLuasPersegi() {
    var sisi = document.getElementById('sisiPersegi').value;
    var hasil = sisi * sisi;
    document.getElementById('hasilLuasPersegi').innerHTML = 'Luas = ' + sisi + ' x ' + sisi + ' = ' + hasil;
}

function resetLuasPersegi() {
    document.getElementById('sisiPersegi').value = '';
    document.getElementById('hasilLuasPersegi').innerHTML = '';
}

function hitungKelilingPersegi() {
    var sisi = document.getElementById('sisiKelilingPersegi').value;
    var hasil = 4 * sisi;
    document.getElementById('hasilKelilingPersegi').innerHTML = 'Keliling = 4 x ' + sisi + ' = ' + hasil;
}

function resetKelilingPersegi() {
    document.getElementById('sisiKelilingPersegi').value = '';
    document.getElementById('hasilKelilingPersegi').innerHTML = '';
}

function hitungLuasPersegiPanjang() {
    var panjang = document.getElementById('panjang').value;
    var lebar = document.getElementById('lebar').value;

    // Validation
    if (!panjang || !lebar) {
        alert('Mohon masukkan nilai panjang dan lebar.');
        return;
    }

    var hasilLuas = panjang * lebar;
    document.getElementById('hasilLuasPersegiPanjang').innerHTML = 'Luas = ' + panjang + ' x ' + lebar + ' = ' + hasilLuas;
}

function hitungKelilingPersegiPanjang() {
    var panjang = document.getElementById('panjang').value;
    var lebar = document.getElementById('lebar').value;

    // Validation
    if (!panjang || !lebar) {
        alert('Mohon masukkan nilai panjang dan lebar.');
        return;
    }

    var hasilKeliling = 2 * (parseInt(panjang) + parseInt(lebar));
    document.getElementById('hasilKelilingPersegiPanjang').innerHTML = 'Keliling = 2 x (' + panjang + ' + ' + lebar + ') = ' + hasilKeliling;
}

function resetPersegiPanjang() {
    document.getElementById('panjang').value = '';
    document.getElementById('lebar').value = '';
    document.getElementById('hasilLuasPersegiPanjang').innerHTML = '';
    document.getElementById('hasilKelilingPersegiPanjang').innerHTML = '';
}

