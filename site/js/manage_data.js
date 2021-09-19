new Vue({
	el : "#vueApp",
	data : {
		states : {
			factionView : "edit",
			unitView : "edit"
		},
		factions : [
			{name : "Adeptus Mechanicus"},
			{name : "Imperial Guard"}],
		selectedFaction : {
			name : "Adeptus Mechanicus",
			units : [
				{name : "Ranger"},
				{name : "Vanguard"}
			]}
	},
	methods : {
		changeUnitView(newView) {
			this.states.unitView = newView;
		},
		changeFactionView(newView) {
			this.states.factionView = newView;
		}
	}
})