const noteSelector = document.querySelector("#noteSelector");
const notesSquare = document.querySelector("#notesSquare");

const notes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];

notes.forEach((note, index) => {
  const option = document.createElement("option");
  option.classList.add("list");
  option.textContent = note;
  option.value = index;
  noteSelector.appendChild(option);

  const square = document.createElement("div");
  square.classList.add("note");
  square.textContent = note;
  square.id = note;
  notesSquare.appendChild(square);
});

const modeSelector = document.querySelector("#modeSelector");

const major = [2,2,1,2,2,2,1];
const minor = [2,1,2,2,1,2,2];
const pentatonicMinor =  [3,2,2,3,2];
const modes = [major, minor, pentatonicMinor];
const modesNames = ["Major", "Minor", "Pentatonic Minor"];

modesNames.forEach((mode, index) =>  {
  const option = document.createElement("option");
  option.classList.add("list");
  option.textContent = mode;
  option.value = index;
  modeSelector.appendChild(option);
});

let notesInScale = [];

function calculate(index, mode) {
  clear();
  modes[mode].forEach(interval=> {
    index +=  interval;
    index = index % 12;
    const square = document.getElementById(`${notes[index]}`);
    square.classList.add("inScale");
    notesInScale.push(notes[index]);
  });
  return notesInScale;
}

function clear(){
  notesInScale.forEach(note=> {
    const square = document.getElementById(`${note}`);
    square.classList.remove("inScale");
  })
  notesInScale = [];
}

let note = Number(noteSelector.value);
let mode = Number(modeSelector.value);
calculate(note, mode);

noteSelector.addEventListener('change', () => {
  note = Number(noteSelector.value);
  mode = Number(modeSelector.value);
  calculate(note, mode);
});

modeSelector.addEventListener('change', () => {
  note = Number(noteSelector.value);
  mode = Number(modeSelector.value);
  calculate(note, mode);
});
