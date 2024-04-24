

export function fromPlanttoPanelLocalStrg(obj = {}) {
    let flowFromPlanttoString = JSON.parse(localStorage.getItem('flowFromPlanttoStringIds'));

    let Ids = {
        plantId: flowFromPlanttoString?.plantId ?? null,
        inverterId: flowFromPlanttoString?.inverterId ?? null,
        stringId: flowFromPlanttoString?.stringId ?? null,
        panelId: flowFromPlanttoString?.panelId ?? null,
    }

    Ids[obj.type] = obj.id;
    localStorage.setItem('flowFromPlanttoStringIds', JSON.stringify(Ids));
} 