//login with jqeury and ajax
//signup with jquwery and ajax
// $( document ).ready( () => {
  
//     var url = window.location;
    
//     // GET REQUEST
//     $("#btnGetFiles").click( (event) => {
//       event.preventDefault();
//       ajaxGet();
//     });
    
//     // DO GET
//     function ajaxGet(){
//       $.ajax({
//         type : "GET",
//         url : "/routes/index/getall",
//         success: (data) => {
//           //clear old data
//           $("#listFiles").html("");
          
//           /*
//             render list of files
//           */
//           $("#listFiles").append('<ul>');
//           $.each(data, (index, file) => {
//             $("#listFiles").append('<li><a href=' + url + 'api/files/' + file.id +'>' + file.name + '</a></li>');
//           });
//           $("#listFiles").append('</ul>');
//         },
//         error : (err) => {
//           $("#listFiles").html(err.responseText);
//         }
//       });  
//     }
//   });

//   $(document).ready( () => {
//     $("#btnSubmit").click((event) => {
//         //stop submit the form, we will post it manually.
//         event.preventDefault();
//         doAjax();
//     });
 
// });
 
// function doAjax() {
 
//     // Get form
//     var form = $('#signup)[0];
//     var data = new FormData(form);
 
//     $.ajax({
//         type: "POST",
//         enctype: 'multipart/form-data',
//         url: "/api/files/upload",
//         data: data,
//         processData: false, //prevent jQuery from automatically transforming the data into a query string
//         contentType: false,
//         cache: false,
//         success: (data) => {
//             $("#listFiles").text(data);
//         },
//         error: (e) => {
//             $("#listFiles").text(e.responseText);
//         }
//     });
// };