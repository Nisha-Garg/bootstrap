$(function(){
    var users = [{
        label: "C",
        value: "1"
    }, {
        label: "C++",
        value: "2"
    }, {
        label: "java",
        value: "3"
    }, {
        label: "django",
        value: "4"
    }, {
        label: "python",
        value: "5"
    }, {
        label: "data structure",
        value: "6"
    }, {
        label: "bootstrap",
        value: "7"
    }, {
        label: "Html5",
        value: "8"
    }, {
        label: "Css",
        value: "9"
    }, {
        label: "Java Script",
        value: "10"
    }, {
        label: "Jquery",
        value: "11"
    }, {
        label: "Ajax",
        value: "12"
    }, {
        label: "github",
        value: "13"
    }, {
        label: "sql",
        value: "14"
    }];
    var users = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('label'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: users
    });
    users.initialize();
    $('#category').tagsinput({
        typeaheadjs: {
            name: 'users',
            displayKey: 'label',
            valueKey: 'label',
            source: users.ttAdapter()
        }
    })
});
// $(document).ready(function(){
//     $('#confirm-submit').on('show.bs.modal', function (e) {
//         console.log("here");
//         $('#inputskill1').text($('#category').val());
//         $('#inputskill2').text($('#tag1').val());
//         $('#inputskill3').text($('#tag2').val());
//         $('#inputskill4').text($('#tag3').val());
//         $('#inputskill5').text($('#tag4').val());
//     });
//     $('#submit1').click(function(){
//         alert('submitting');
//         $('#myform').submit();
//     });
// });
