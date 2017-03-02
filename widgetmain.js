var names = ["Aakriti Kashyap","Pankul Mittal", "Ankit bhati", "Asif Akhtar", "Ishaan Raavish", "Lakshay Lakhani","Nitish Kansal",
"Nisha Garg","Ravi","Sanyam Bansal"];

$(function(){
    $('#name3').typeahead({
        source: names,
        matcher: function (item) {
            if (item.toLowerCase().indexOf(this.query.trim().toLowerCase()) != -1) {
                return true;
            }
        },
        sorter: function (items) {
            return items.sort();
        }
    });
});
$(function(){
    $('#name').typeahead({
        source: names,
    });
});

$(function(){
    var allLink = {url:'http://example.com/search?q=',text:'View All'};
    $('#name2').typeahead({
        minLength: 1,
        source: names,
        highlighter: function (item) {
            if (item == allLink.text) return '<strong>' + item + '</strong>'
            var query = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')
            return item.replace(new RegExp('(' + query + ')', 'ig'), function ($1, match) {
                return '<strong>' + match + '</strong>'
            });
        },
        updater:function(item){
            console.log(this);
            if(item == allLink.text)
            window.location = allLink.url+this.$element.val();
            return item;
        }
    }).data('typeahead').render = function (items) {
        var that = this
        items.push(allLink.text);
        items = $(items).map(function (i, item) {
            i = $(that.options.item).attr('data-value', item)
            i.find('a').html(that.highlighter(item))
            return i[0]
        })
        items.first().addClass('active')
        this.$menu.html(items)
        return this
    }
});

$(document).ready(function(){
//     $('#submitBtn').click(function(){
//         $("#myform").hide();
//         $('#gif').css('visibility', 'visible');
//         $.ajax({
//             url: "file://home/nisha/assigments/assignment6/widget.html",
//             cache: false,
//             success: function(html){
//                 $(".main1").append(html);
//             },
//             complete: function(){
//                 $("#loading-image").hide();
//             }
//         });
//         setTimeout(function(){
//             $('#gif').fadeOut('slow');
//         },2000);
//     })
// });

    $('#confirm-submit').on('show.bs.modal', function (e) {
        console.log("here");
        $('#inputname').text($('#name').val());
        $('#inputname1').text($('#name2').val());
        $('#inputname2').text($('#name3').val());
        $('#inputdob').text($('#datepicker').val());
        $('#inputdob1').text($('#datepicker1').val());
        $('#inputdob2').text($('#daterange').val());
        $('#inputdob3').text($('#txtdate').val());
        $('#inputdob4').text($('#datepicker3').val());
        $('#inputdob5').text($('#order_delivery_date').val());
        $('#inputskills').text($('#tags').val());
    });
    $('#submit1').click(function(){
        alert('submitting');
        $('#myform').submit();
    });
});
