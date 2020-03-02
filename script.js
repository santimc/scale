const noteSelector = document.querySelector("#noteSelector");
const notesSquare = document.querySelector("#notesSquare")

const notes = ["C","D♭","D","E♭","E","F","G♭","G","A♭","A","B♭","B"];

notes.forEach((note, index) => {
  const option = document.createElement("option");
  option.classList.add("list");
  option.textContent = note;
  option.value = index;
  noteSelector.appendChild(option);

  const square = document.createElement("div");
  square.classList.add("note");
  square.textContent = note;
  square.value = index;
  notesSquare.appendChild(square);
});

const modeSelector = document.querySelector("#modeSelector");

const major = [2,2,1,2,2,2,1];
const minor = [2,1,2,2,1,2,2];
const modes = [major, minor];
const modesNames = ["Major", "Minor"];

modesNames.forEach((mode, index) =>  {
  const option = document.createElement("option");
  option.classList.add("list");
  option.textContent = mode;
  option.value = index;
  modeSelector.appendChild(option);
});

function calculate(index, mode) {
  let notesInScale = [];
  mode.forEach(interval=> {
    index +=  interval;
    index = index % 12;
    notesInScale.push(index);
  });
  return notesInScale;
}
for (var i = 0; i < 12; i++) {
  console.log(calculate(i,major));
}
