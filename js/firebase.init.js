angular.module('firebaseConfig', ['firebase'])

.run(function(){

  // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCR-_M7p1Tu0MaKIVEHl8Sk26mKsKik1M0",
        authDomain: "cystic-fibrosis-companion-app.firebaseapp.com",
        databaseURL: "https://cystic-fibrosis-companion-app.firebaseio.com",
        storageBucket: "cystic-fibrosis-companion-app.appspot.com",
        messagingSenderId: "265805843771"
    };
    firebase.initializeApp(config);

})

.service("Schedule", ["$firebaseArray", function($firebaseArray){
    var ref = firebase.database().ref().child("health_tracker");
    var items = $firebaseArray(ref);
    var track = {
        items: items,
        addItem: function(bmi,bp,date,fev1,id,pulse,weight){
            items.$add({
                id: items.count()+1,
                bmi: bmi,
                bp:bp,
                date:date,
                fev1:fev1,
                pulse:pulse,
                weight:weight
            })
        }
    }
    return todos;
}])


/*

.service("TodoExample", ["$firebaseArray", function($firebaseArray){
    var ref = firebase.database().ref().child("todos");
    var items = $firebaseArray(ref);
    var todos = {
        items: items,
        addItem: function(title){
            items.$add({
                title: title,
                finished: false
            })
        },
        setFinished: function(item, newV){
            item.finished = newV;
            items.$save(item);
        }
    }
    return todos;
}])

*/