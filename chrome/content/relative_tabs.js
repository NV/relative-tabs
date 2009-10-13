//var Application = Application || Components.classes["@mozilla.org/fuel/application;1"].getService(Components.interfaces.fuelIApplication);
window.addEventListener('load', function(){
  
  var w = Application.activeWindow;
  
  w.events.addListener("TabOpen", function(event){
    // Select tab after active one
    event.data.moveBefore( w.tabs[w.activeTab.index + 1] );
  });

  w.events.addListener("TabClose", function(event){
    // Select tab before the closed one
    w.activeTab.moveBefore( w.tabs[w.activeTab.index - 1] );
  });
  
}, false);