$(document).ready(function(){
    $('button').click(function(){
   
         printJS({ printable: 'printJS-form', type: 'html', header: 'PrintJS - Form Element Selection' }    )
   
})
$.ajax({
    'async': false,
    'global': false,
    'url': "a.json",
    'dataType': "json",
    'success': function (data) {
        // do stuff with data
        console.log(data)
    }
});
})