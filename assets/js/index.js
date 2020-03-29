// $(document).ready(function () {
//     $.getJSON("/assets/data/data.json", function (data) {
//         for (let d of data) {
//             $("#main-container").append(`
//             <div class="col" style="margin-bottom: 10px">
//             <div class="card" style="width: 18rem; margin: auto; display: block;">
//                 <div class="card-body">
//                     <h5 class="card-title">${d.Name}</h5>
//                     <h6 class="card-subtitle mb-2 text-muted">${d.Hospital}</h6>
//                     ${
//                         Object.keys(d).includes("Mobile") ?
//                         d.Mobile.map((item)=>{
//                             return `<a style="margin: 2px" href="tel:${item}" class="btn btn-info"><i class="fas fa-phone-volume"></i>${item}</a>` 
//                         }) 
//                         : ""
//                     }
//                     ${
//                         Object.keys(d).includes("Whatsapp") ?
//                         d.Whatsapp.map((item)=>{
//                            return `<a style="margin: 2px" href="https://wa.me/${item}" class="btn btn-success"><i class="fab fa-whatsapp"></i>${item}</a>`
//                         })
                         
//                          : ""
//                     }
//                 </div>
//             </div>
//             </div>
            
//             `
            
//             )
//         }
//     })
// });

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }