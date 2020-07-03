$(document).ready(function () {
    // текст жирний
    $('.bold').click(function () {
        $('.text-box').toggleClass('bold-text')
    })
    // текст курсив
    $('.italic').click(function () {
        $('.text-box').toggleClass('italic-text')
    })
    // текст підкреслений
    $('.underline').click(function () {
        $('.text-box').toggleClass('underline-text')
    })
    // текст закреслений
    $('.strikethrough').click(function () {
        $('.text-box').toggleClass('strikethrough-text')
    })
    // текст зліва
    $('.left').click(function () {
        $('.text-box').addClass('align-left');
        $('.text-box').removeClass('align-center');
        $('.text-box').removeClass('align-right')
    })
    // текст по-центру
    $('.center').click(function () {
        $('.text-box').addClass('align-center')
        $('.text-box').removeClass('align-left');
        $('.text-box').removeClass('align-right')
    })
    // текст справа
    $('.right').click(function () {
        $('.text-box').addClass('align-right');
        $('.text-box').removeClass('align-left');
        $('.text-box').removeClass('align-center');
    })
    // font familys
    let f;
    $('.font').click(function () {
        $('.text-box ').children().css('font-family', `${$(this).text()}`);
        $('li').css('font-family', `${$(this).text()}`);
        $('td').css('font-family', `${$(this).text()}`);
        f = $(this).text();
    })
    // font size
    let s;
    $('.size').click(function () {
        $('.text-box ').children().css('font-size', `${$(this).text()}`);
        $('li').css('font-size', `${$(this).text()}`);
        $('td').css('font-size', `${$(this).text()}`);
        s = $(this).text()
    })
    //зміна кольору тексту
    let c;
    $('.different-colors').click(function () {
        $('.text-box').children().css({
            'color': `${$(this).css('background-color')}`,
            'text-decoration-color': `${$(this).css('background-color')}`
        });
        $('li').css({
            'color': `${$(this).css('background-color')}`,
            'text-decoration-color': `${$(this).css('background-color')}`
        });

        $('td').css({
            'color': `${$(this).css('background-color')}`,
            'text-decoration-color': `${$(this).css('background-color')}`
        });

        c = $(this).css('background-color');
    })
    // ---зміна фону----------------------------------------------------------------
    $('.bgs').click(function () {
        $('.modal2').fadeIn(200);
    })
    $('.bgCol').click(function () {
        $('.text-box').css('background', `${$(this).css('background-color')}`)
    })
    $('.different-images').click(function () {
        $('.text-box').css({
            background: `${$(this).css('background-image')}`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        })
    })
    $('.custom-file-input').change(function () {
        let url = URL.createObjectURL(event.target.files[0])
        $('.text-box').css({
            background: `url(${url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        })

    })
    $('.close2').click(function () {
        $('.modal2').fadeOut(200);
    })
    // -----------------------------------------------------------------------------
    // ---- sign in-------
    $('.lock').click(function () {
        if ($('.lock').html() == `<i class="fas fa-unlock"></i>`) {
            $('.modal7').fadeIn(200);
        }
        else {
            $('.modal3').fadeIn(200);
        }
    })

    $('.btn-sign').click(function () {
        if ($('.login').val() == '' || $('.password').val() == '') {
            $('.check-data').show();
            $('.check-data').text('Value is empty');
            $('.login').addClass('inp-inv-val');
            $('.password').addClass('inp-inv-val');
        }
        else if ($('.login').val() == 'log' && $('.password').val() == 'pas') {
            $('.modal3').fadeOut(200);
            $('.login').val('');
            $('.password').val('');
            $('.login').removeClass('inp-inv-val');
            $('.password').removeClass('inp-inv-val');
            $('.check-data').hide();
            $('.btFile').removeAttr('disabled');
            $('.lock').html('<i class="fas fa-unlock"></i>')
        }
        else {
            $('.check-data').show();
            $('.check-data').text('Pleace check your login or password');
        }
    })

    // ---- sign out----------------------------------------------------------------------------------
    $('.cancel').click(function () {
        $('.modal7').fadeOut(200);
    })
    $('.btn-sign-out').click(function () {
        $('.modal7').fadeOut(200);
        $('.lock').html(`<i class="fas fa-lock"></i>`);
        $('.btFile').attr('disabled', 'disabled');
    })
    // -----------------------------------------------------------------------------------------------
    // ---клік на кнопку file, з'являється контейнер з кнопками для редагування тексту, створ табл., списків
    $('.btFile').click(function () {
        $('.edit-container').show();
        $('.options-container').hide();
        $('.area').val($('.text-box').html());
        $('.area').show();
        $('.text-box').hide();

    })
    // ---клік на кнопку save для збереження змін
    $('.save-bt').click(function () {
        $('.text-box').html($('.area').val());
        $('.area').hide();
        $('.text-box').show();
        $('.edit-container').hide();
        $('.options-container').show();

    })
    //----відкривається модальне вікно для створення таблиці------------------------------------
    $('.table-bt').click(function () {
        $('.modal4').show();
    })
    $('.close4').click(function () {
        $('.modal4').hide();
    })
    // створення таблиці, але споч  валідація і стилізація 
    // таблицю створюю, використовуючи чистий js
    let form = document.forms['formCreateTable'];
    const area = document.querySelector('.area');
    $('.bt-create-tb').click(function () {
        // введу змінну count, щоб порахувати чи всі поля заповнені,
        // і якщо count = кількості заповнених полів , то тоді створю таблицю
        let count = 0;
        // перевіряю чи не пусті знач і чи числові у інпутів таблиці
        $('.inp-tab').each(function (index, element) {
            if ($(element).val() == '' || isNaN($(element).val()) == true) {
                $(element).addClass('inp-inv-val')
            }
            else {
                $(element).removeClass('inp-inv-val');
                count++;
            }
        })
        // перевіряю лише чи не пусті значення у селектів
        // цикл на два селекта не створюю, бо їх лише два
        if ($('.select1-tab-row3').val() == '') {
            $('.select1-tab-row3').addClass('inp-inv-val')
        }
        else {
            $('.select1-tab-row3').removeClass('inp-inv-val');
            count++;
        }
        if ($('.select2-tab-row3').val() == '') {
            $('.select2-tab-row3').addClass('inp-inv-val')
        }
        else {
            $('.select2-tab-row3').removeClass('inp-inv-val');
            count++;
        }
        if (count < 7) { $('.mes-tab-form').show() }

        if (count == 7) {
            $('.area').show();
            $('.mes-tab-form').hide()

            let countTr = form.countTr.value;
            let countTd = form.countTd.value;
            let widthBd = form.widthBd.value;
            let heightTD = form.heightTD.value;
            let widthTD = form.widthTD.value;
            let styleBd = form.styleBd.value;
            let colorBd = form.colorBd.value;
            area.value += `<table >`;
            for (let i = 1; i <= countTr; i++) {
                area.value += `<tr>`;
                for (let j = 1; j <= countTd; j++) {
                    area.value += `<td style = "border-width: ${widthBd}px; width: ${widthTD}px; 
            height: ${heightTD}px;  border-style:${styleBd}; border-color:${colorBd};font-family: ${f}; font-size:${s};color:${c}; text-decoration-color:${c};">TD</td>`;
                }
                area.value += `</tr>`;
            }
            area.value += `</table>`;
        }
    })
    $('.bt-reset-tb').click(function () {
        form.reset()
    })
    // ----------------------------------------------------------------------------------------------
    // --------відкривається мoдальне вікно для створення ol-----------------------------------------
    $('.ol-bt').click(function () {
        $('.modal5').show();
    })
    $('.close5').click(function () {
        $('.modal5').hide();
    })
    let form2 = document.forms['formCreateOlList'];
    // валідація полів і створення ol
    $('.bt-create-ol').click(function () {
        let count = 0;
        if ($('.inp-ol-count').val() == '' || isNaN($('.inp-ol-count').val()) == true) {
            ;
            $('.inp-ol-count').addClass('inp-inv-val')
        }
        else {
            $('.inp-ol-count').removeClass('inp-inv-val');
            count++;
        }
        if ($('.sel-ol-type').val() == '') {
            $('.sel-ol-type').addClass('inp-inv-val')
        }
        else {
            $('.sel-ol-type').removeClass('inp-inv-val');
            count++;
        }
        // ol створюю використовуючи чистий js
        if (count < 2) { $('.mes-ol-form').show() }
        if (count == 2) {
            $('.area').show();
            $('.mes-ol-form').hide();
            let countLiOl = form2.countLiOl.value;
            let typeMrOl = form2.typeMrOl.value;
            area.value += `<ol type = "${typeMrOl}" style = "margin: 10px ">`
            for (let i = 1; i <= countLiOl; i++) {
                area.value += `<li style = "font-family: ${f}; font-size:${s}; color:${c}"; text-decoration-color:${c};>ol list item${i}</li>`
            }
            area.value += `</ol>`;
        }
    })
    $('.bt-reset-ol').click(function () {
        form2.reset()
    })
    // ---------------------------------------------------------------------------------------------------
    // --------відкривається мoдальне вікно для створення ul----------------------------------------------
    $('.ul-bt').click(function () {
        $('.modal6').show();
    })
    $('.close6').click(function () {
        $('.modal6').hide();
    })
    // валідація полів і створення ul
    let form3 = document.forms['formCreateUlList'];
    $('.bt-create-ul').click(function () {
        let count = 0;
        if ($('.inp-ul-count').val() == '' || isNaN($('.inp-ul-count').val()) == true) {
            $('.inp-ul-count').addClass('inp-inv-val')
        }
        else {
            $('.inp-ul-count').removeClass('inp-inv-val');
            count++;
        }
        if ($('.sel-ul-type').val() == '') {
            $('.sel-ul-type').addClass('inp-inv-val')
        }
        else {
            $('.sel-ul-type').removeClass('inp-inv-val');
            count++;
        }
        if (count < 2) { $('.mes-ul-form').show() }
        // ul створюю використовуючи чистий js
        if (count == 2) {
            $('.area').show();
            $('.mes-ul-form').hide();
            let countLiUl = form3.countLiUl.value;
            let typeMrUl = form3.typeMrUl.value;
            area.value += `<ul type = "${typeMrUl}" style = "margin: 10px; ">`
            for (let i = 1; i <= countLiUl; i++) {
                area.value += `<li style = "font-family: ${f}; font-size:${s}; color:${c}; text-decoration-color:${c} ">ul list item${i}</li>`
            }
            area.value += `</ul>`;
        }
    })
    $('.bt-reset-ul').click(function () {
        form3.reset()
    })
    // -------------------------------------------------------------------------------------------------




});

