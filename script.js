class TimeblockObj {
  constructor(hour, ToDo) {
    this.hour = hour;
    this.ToDo = ToDo;
  }
}

function grabCTimeBLocks() {
  const currentTimeblocks = localStorage.getItem('TimeblockObjects');
  return currentTimeblocks ? JSON.parse(currentTimeblocks) : [];
}

function ShowCData(currentTime) {
  document.getElementById('currentDay')
    .textContent = currentTime.format('dddd, MMMM Do');
}

function ShowTBlockROws(currentTime) {
  const currentHour = currentTime.hour();
  for (let i = 9; i <= 17; i ++) {
    const timeblock = MakeTimeBRow(i);
    const hourCol = CreateC(Hourdiv(i), 1);
    const textArea = CreateC(GenerateTA(i, currentHour), 10);
    const saveBtn = CreateC(makeTHEBUTTON(i), 1);
    addTotheTIMECOLLUMNS(timeblock, hourCol, textArea, saveBtn);
    document.querySelector('.container').appendChild(timeblock);
  }
}

function MakeTimeBRow(hourId) {
  const timeblock = document.createElement('div');
  timeblock.classList.add('row');
  timeblock.id = `timeblock-${hourId}`;
  return timeblock;
}

function CreateC(element, colSize) {
  const col = document.createElement('div');
  col.classList.add(`col-${colSize}`,'p-0');
  col.appendChild(element);
  return col;
}

function HourDiv(hour) {
  const hourCol = document.createElement('div');
  hourCol.classList.add('hour');
  hourCol.textContent = setHour(hour);
  return hourCol;
}

function setHour(hour) {
  const hourString = String(hour);
  return moment(hourString, 'h').format('hA');
}

function GenerateTA(hour, currentHour) {
  const textArea = document.createElement('textarea');
  textArea.classList.add(grabTAback(hour, currentHour));
  return textArea;
}

function grabTAback(hour, currentHour) {
  return hour < currentHour ? 'past' 
    : hour === currentHour ? 'present' 
    : 'future';
}

function makeTHEBUTTON(hour) {
  const saveBtn = document.createElement('button');
  saveBtn.classList.add('saveBtn');
  saveBtn.innerHTML = '<i class="fas fa-save"></i>';
  saveBtn.setAttribute('data-hour', hour);
  return saveBtn;
}

function addTotheTIMECOLLUMNS(timeblockRow, hourCol, textAreaCol, saveBtnCol) {
  const innerCols = [hourCol, textAreaCol, saveBtnCol];
  for (let col of innerCols) {
    timeblockRow.appendChild(col);
  }
}

function CC(event, timeblockList) {
  if (thisIstheSaveButton(event)) {
    const timeblockHour = grabtheTBH(event);
    const textAreaValue = getTAval(timeblockHour);
    putItrightThere(new TimeblockObj(timeblockHour, textAreaValue), timeblockList);
    makeSureItsSafe(timeblockList);
  }
}

function thisIstheSaveButton(event) {
  return event.target.matches('button') || event.target.matches('.fa-save');
}

function grabtheTBH(event) {
  return event.target.matches('.fa-save') ? event.target.parentElement.dataset.hour : event.target.dataset.hour;
}

function getTAval(timeblockHour) {
  return document.querySelector(`#timeblock-${timeblockHour} textarea`).value;
}

function putItrightThere(newTimeblockObj, timeblockList) {
  if (timeblockList.length > 0) {
    for (let savedTimeblock of timeblockList) {
      if (savedTimeblock.hour === newTimeblockObj.hour) {
        savedTimeblock.ToDo = newTimeblockObj.ToDo;
        return;
      }
    }
  } 
  timeblockList.push(newTimeblockObj);
  return;
}

function makeSureItsSafe(timeblockList) {
  localStorage.setItem('TimeblockObjects', JSON.stringify(timeblockList));
}