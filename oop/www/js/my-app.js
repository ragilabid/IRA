// Initialize your app
var myApp = new Framework7({
    material: true,

    pushState: true,

    pushStateNoAnimation: true,
  
    onAjaxStart: function (xhr) {
        myApp.showIndicator();
    },

    onAjaxComplete: function (xhr) {
        myApp.hideIndicator();
    }
});

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    domChace: true,
    dynamicNavbar: true
});


$$(document).on('pageInit', '.page[data-page="materi', function(e) {

    var mySwiper1 = myApp.swiper('.swiper-1', {
        pagination:'.swiper-pagination',
    });

    var mySwiper2 = myApp.swiper('.swiper-2', {
        pagination:'.swiper-pagination',
    });

});

//for "latihan"
//Latihan 1
$$(document).on('pageInit', '.page[data-page="latihan-1"]', function(e) {
    var page = e.detail.page;
    //do all thing here
    var pos = 0, test_status, question, choice, choices, correct = 0;
    var questions = [
        ["Salah satu konsep dasar objek adalah Has Behavior (because Object has Method), yaitu objek itu mempunyai prilaku atau sifat-sifat yang khusus.", "benar", "salah", "true"],
        ["Objek adalah perwujudan dari class, setiap objek mempunyai attribute dan method yang dimiliki oleh class-nya.", "benar", "salah", "true"],
        ["Pendekatan top-down  merupakan salah satu pendekatan yang terdapat dalam Pemrograman Berorientasi Objek ", "benar", "salah", "false"],
        ["Java merupakan salah satu bahasa pemrograman yang mendukung pemrograman berorientasi objek (OOP) ", "benar", "salah", "true"],
        ["Java Standart Development Kit (SDK) bukan merupakan kumpulan pustaka yang digunakan untuk mengembangkan aplikasi bahasa Java.", "benar", "salah", "false"]
    ];

    function renderQuestion() {
        console.log("renderQuestion called");        

        var test_status_inner = "Pertanyaan ke " + (pos + 1) + " dari " + questions.length;
        $$(page.container).find('#progress').html(test_status_inner);

        if(pos >= questions.length) {
            var item = '<div class="content-block">' +
                            '<div class="content-block-inner">' +
                                '<p>Jawaban Benar : ' + correct + '</p>' +
                                '<p>Jawaban Salah : ' + (questions.length - correct) + '</p>' +
                            '</div>' +
                            '<div class="content-block" style="color: #af36c6;">' +
                                '<h1 align="center" >Nilai kamu    : ' + (correct * 20) + '</h1>' +
                            '</div>' +
                        '</div>';

            $$(page.container).find('#quiz').html(item);
            pos = 0;
            correct = 0;
            return true;
        }

        question = questions[pos][0];
         $$(page.container).find('#question').html(question);

        for(var i = 0; i < questions[pos].length; i++) {
             $$(page.container).find('#choice' + (i+1)).html(questions[pos][i+1]);
        }

    }

    function checkAnswer() {
        console.log("checkAnswer called");
        console.log("before :" +pos);
        choice = $$(page.container).find('input[name="my-radio"]:checked').val();

        if(choice == questions[pos][3]) {
            correct++;
            myApp.alert('Kamu benar', 'Hore!!');
        }
        else {
            myApp.alert('Kamu salah/belum menjawab', 'Yahh!');
        }

        pos++;
        console.log("after :" +pos);
        renderQuestion();

    }

    if(pos == 0) {
        renderQuestion();
    }

    $$(page.container).find('#submit_btn').click(function() {
        console.log("called twice");
        checkAnswer();
    });

});

//page "evaluasi"

$$(document).on('pageInit', '.page[data-page="evaluasi"]', function(e) {

    var page = e.detail.page;
    //do all thing here
    var pos = 0, test_status, question, choice, choices, correct = 0;
    var questions = [
        ["Karakteristik bahasa pemrograman berorientasi objek yang menyembunyikan data, fungsi dan prosedur dalam objek adalah ...", "Polimorphism", "Enkapsulasi", "Modular", "Inheritence", "Modifier", "B"],
        ["Berikut ini adalah hak akses yang dapat ditambahkan di depan method Java, kecuali", "Protected", "Default", "Private", "Static", "Public", "D"],
        ["Manfaat dari teknik enkapsulasi adalah, kecuali ...", "Variabel/field class bersifat privat", "Information hidding", "Memodifikasi kode tanpa merusak kode yang class lain", "Perubahan internal sebuah class berpengaruh bagi class yang menggunakannya", "Modularitas", "D"],
        ["Access modifier yang metertulis secara eksplisit diantaranya adalah, kecuali ...", "Public", "Private", "Default", "Protected", "Semua Salah", "C"],
        ["Modifier yang digunakan untuk mencegah kemungkinan modifikasi terhadap atribut maupun method adalah ...", "Static", "Final", "Protected", "Default", "Public", "B"],
        ["Sintaks java untuk melakukan kompilasi terhadap berkas program adalah :", "Java", "Javac", "Javaclass", "Javax", "Javacompile", "B"],
        ["Sebutkan tiga prinsip utama dalam Pemrograman Berorientasi Obyek ...", "Public, Protected, Class", "Polimorphism, Class, Private", "Inheritance, Extend, Enkapsulasi", "Enkapsulasi, Polimorphism, Extend", "Inheritance, Polimorphism, Enkapsulasi", "E"],
        ["Meningkatkan extensibilitas dan penggunaan kembali perangkat lunak merupakan tujuan dari ...", "Pemrograman Dasar", "Pemrograman Terstruktur", "Pemrograman Modular", "Pemrograman Berorientasi Objek", "Pemrograman Top Down", "D"],
        ["Di bawah ini pernyataan yang benar tentang metode dan objek, kecuali ...", "Nama metode harus diletakkan sebelum nama objek yang memiliki metode tersebut", "Metode didefinisikan secara penuh diluar objek", "Metode merupakan suatu procedure atau fungsi yang disatukan dalam suatu objek", "Dalam sebuah objek suatu meotde didefinisikan dengan suatu header fungsi", "Metode didefinisikan dengan prosedur dalam sebuah objek", "A"],
        ["Berikut adalah penamaan class yang dierbolehkan dalam java, kecuali ..", "One_3", "Bet4", "7o_jo", "Yan1", "Horee_", "C"],
        ["Berikut ini pernyataan yang benar berhubungan dengan class dan object dalam Java, kecuali ...", "Setiap class dapat mengandung beberapa method sekaligus", "Object merupakan instance dari class", "Object terdiri dari keyword dan method", "Class merupakan contoh abstrak dari sebuah object yang telah terbentuk dari proses penyederhanaan", "Class merupakan pendefinisian dari object", "C"],
        ["Mobil berwarna merah melaju dengan cepat. Dari kalimat tersebut yang merupakan contoh karakteristik objek behavior, yaitu ...", "Mobil", "Cepat", "Berwarna", "Merah", "Melaju", "E"],
        ["Method yang namanya sama dengan nama kelas disebut ...", "Constructor", "Rekursive", "Loop", "Factorial", "Atribut", "A"],
        ["Abstract Class ditulis dengan ...", "Cetak tebal", "Garis bawah", "Kutip dua", "Miring", "Cetak tebal dan huruf kapital", "D"],
        ["Class yang harus didefinisikan sebagai satu set karakter yang unik yang membedakannya dengan class-class lain dalam hierarki disebut dengan ...", "Dependant", "Abstract", "Private", "Adjoint", "Disjoint", "E"],
        ["Method yang digunakan untuk membandingkan dua buah string adalah ...", "concat()", "equal()", "qeuals()", "substring()", "loop()", "C"],
        ["Method dibawah ini yang tidak mengembalikan nilai yaitu ...", "int kosong()", "void cetak()", "int konversi()", "double emptyFunction()", "semua benar", "B"],
        ["Untuk mendeklarasikan suatu class sebagai subclass yaitu dengan menambahkan kata kunci ...", "Extends setelah deklarasi nama class", "Abstract setelah deklarasi nama class", "Private setelah deklarasi nama class", "Double setelah deklarasi nama class", "Semua salah", "A"],
        ["Diantara pernyataan berikut, konsep yang tidak ada di dalam pemrograman Java adalah …", "Polymorphism", "Encapsulation", "Multiple Inheritance", "Single Inheritance", "Inheritance", "C"],
        ["Class yang mewariskan disebut dengan ...", "Subclass", "Abstract Class", "Inheritance Class", "Parent Class", "Child Class", "D"]

    ];

    function renderQuestion() {
        console.log("renderQuestion called");        

        var test_status_inner = "Pertanyaan ke " + (pos + 1) + " dari " + questions.length;
        $$(page.container).find('#progress').html(test_status_inner);

        if(pos >= questions.length) {
            var item = '<div class="content-block">' +
                            '<div class="content-block-inner">' +
                                '<p>Jawaban Benar : ' + correct + '</p>' +
                                '<p>Jawaban Salah : ' + (questions.length - correct) + '</p>' +
                            '</div>' +
                            '<div class="content-block" style="color: #af36c6;">' +
                                '<h1 align="center" >Nilai kamu    : ' + (correct * 5) + '</h1>' +
                            '</div>' +
                        '</div>';

            $$(page.container).find('#quiz').html(item);
            pos = 0;
            correct = 0;
            return true;
        }

        question = questions[pos][0];
         $$(page.container).find('#question').html(question);

        for(var i = 0; i < questions[pos].length; i++) {
             $$(page.container).find('#choice' + (i+1)).html(questions[pos][i+1]);
        }

    }

    function checkAnswer() {
        console.log("checkAnswer called");
        console.log("before :" +pos);
        choice = $$(page.container).find('input[name="my-radio"]:checked').val();

        if(choice == questions[pos][6]) {
            correct++;
            myApp.alert('Kamu benar', 'Hore!!');
        }
        else {
            myApp.alert('Kamu salah/belum menjawab</br> jawaban benar '+questions[pos][6], 'Yahh!');
        }

        pos++;
        console.log("after :" +pos);
        renderQuestion();

    }

    if(pos == 0) {
        renderQuestion();
    }

    $$(page.container).find('#submit_btn').click(function() {
        console.log("called twice");
        checkAnswer();
    });

});