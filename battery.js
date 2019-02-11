let currentBattery = 0;

navigator.getBattery().then(function(battery) {
  console.log(battery.level);
  currentBattery = Math.round(battery.level *100) + "%"
  // document.getElementById('battery_level').innerHTML(currentBattery)
  document.getElementById('battery_level').innerHTML = 'Battery' + ' ' + 'level' + ' ' + 'is' + ' ' + currentBattery
  // ... and any subsequent updates.
  battery.onlevelchange = function() {
    console.log(this.level);
  };
});

let currentCharge = 0;
let batter_charged = 0;
let discharged = 0;

window.onload = function () {
      function updateBatteryStatus(battery) {
        currentCharge = document.querySelector('#charging').textContent = battery.charging ? 'charging' : 'not charging';
        document.getElementById('charging').innerHTML = 'Battery' + ' ' + 'status' + ' ' + 'is' + ' ' +currentCharge;
        batter_charged = document.querySelector('#battery_charged').textContent = battery.level;
        document.getElementById('battery_charged').innerHTML = 'Battery' + ' ' + 'will' + ' ' + 'be' + ' ' + 'fully' + ' ' + 'charged' + ' ' + 'in' + ' ' + batter_charged;
        discharged = document.querySelector('#battery_discharged').textContent = battery.dischargingTime / 60;
        document.getElementById('battery_discharged').innerHTML = 'Battery' + ' ' + 'will' + ' ' + 'be' + ' ' + 'fully' + ' ' + 'charged' + ' ' + 'in' + ' ' + discharged;

      }

      navigator.getBattery().then(function(battery) {
        // Update the battery status initially when the promise resolves ...
        updateBatteryStatus(battery);

        // .. and for any subsequent updates.
        battery.onchargingchange = function () {
          updateBatteryStatus(battery);
        };

        battery.onlevelchange = function () {
          updateBatteryStatus(battery);
        };

        battery.ondischargingtimechange = function () {
          updateBatteryStatus(battery);
        };
      });
    };
