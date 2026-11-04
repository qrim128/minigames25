// ============================================================================
//  Web player game list  (edit this file to choose which minigames are shown)
// ----------------------------------------------------------------------------
//  FASTEST WAY: open  web.html?edit=1 , tick the games you want and press
//  "Save to server". Every visitor's menu follows automatically (needs the
//  one-time web-config.sql setup in Supabase). When the server has a saved
//  list, it overrides WEB_SHOW_ONLY below; this file is the fallback.
//
//  Manual fallback: press "Copy line" in the picker and paste it over
//  `window.WEB_SHOW_ONLY` below.
//
//  Or by hand, either:
//   - list the ids you want in WEB_SHOW_ONLY (empty list = not used), or
//   - set  show: true / false  on each game further down.
//  WEB_SHOW_ONLY, when not empty, takes priority over the show flags.
//  Save the file and reload web.html.
//
//  - A game without a `show` field is shown.
//  - `defaults` are the settings the game starts with (in FiveM the Lua server
//    supplies these). Edit them to change difficulty, e.g. timeLimit (ms).
//  - Co-op games list the game engine's built-in defaults here, so every co-op setting
//    can also be changed from admin.html.
//  - Easiest of all: open admin.html and use the sliders icon on any minigame to change its
//    settings. They are saved to the server (key 'game_settings') and override `defaults`.
// ============================================================================
window.WEB_SHOW_ONLY = [];  // empty = show every game (per-game show flags still apply)

window.WEB_GAMES = {
  // ------------------------------- SOLO MINIGAMES ---------------------------
  solo: [
    { show: true, id: "firewallpulse", title: "Firewall Pulse", hint: "Stop the pulse inside the safe zone",
      defaults: {"requiredHacks": 3, "initialSpeed": 2, "maxSpeed": 10, "timeLimit": 10000, "safeZoneMinWidth": 40, "safeZoneMaxWidth": 120, "safeZoneShrinkAmount": 10} },
    { show: true, id: "backdoor", title: "Backdoor Sequence", hint: "Type the keys in order",
      defaults: {"stages": 3, "keysPerStage": 5, "timeLimit": 15000, "keyPool": ["W", "A", "S", "D", "Q", "E"], "keyHint": ""} },
    { show: true, id: "rhythm", title: "Circuit Rhythm", hint: "Hit the notes in sync with the beat",
      defaults: {"lanes": 4, "keys": ["A", "S", "D", "F"], "noteSpeed": 300, "noteSpawnRate": 1000, "requiredNotes": 20, "difficulty": "normal", "maxWrongKeys": 5, "maxMissedNotes": 3} },
    { show: true, id: "surge", title: "Surge Override", hint: "Mash the key to override the surge",
      defaults: {"keys": ["E"], "requiredPresses": 50, "decayRate": 2} },
    { show: true, id: "varhack", title: "Variable Hack", hint: "Memorize, then click the numbers in order",
      defaults: {"blocks": 5, "speed": 5} },
    { show: true, id: "numberup", title: "Number Up", hint: "Click the numbers in ascending order",
      defaults: {"count": 20, "timeLimit": 30000, "gridCols": 4, "maxMistakes": 3} },
    { show: true, id: "memory", title: "Memory Test", hint: "Remember which squares light up",
      defaults: {"gridSize": 5, "squareCount": 8, "rounds": 3, "showTime": 3000, "guessTime": 10000, "maxWrongPresses": 3} },
    { show: true, id: "seqmemory", title: "Sequence Memory", hint: "Repeat the growing sequence",
      defaults: {"gridSize": 4, "rounds": 5, "maxWrongPresses": 3, "showTime": 1000, "delayBetween": 300} },
    { show: true, id: "verbalmemory", title: "Verbal Memory", hint: "Have you seen this word before?",
      defaults: {"maxStrikes": 3, "wordsToShow": 50, "wordDuration": 5000} },
    { show: true, id: "numseq", title: "Numbered Sequence", hint: "Memorize where the numbers were",
      defaults: {"gridSize": 4, "sequenceLength": 6, "rounds": 3, "showTime": 4000, "guessTime": 10000, "maxWrongPresses": 3} },
    { show: true, id: "symbolsearch", title: "Symbol Search", hint: "Find the start of the key sequence",
      defaults: {"gridSize": 8, "shiftInterval": 1000, "timeLimit": 30000, "minKeyLength": 1, "maxKeyLength": 1, "symbolType": "symbols", "symbols": {}} },
    { show: true, id: "pipepressure", title: "Pipe Pressure", hint: "Rotate pipes to connect START to END",
      defaults: {"gridSize": 6, "timeLimit": 30000} },
    { show: true, id: "pairs", title: "Pairs", hint: "Find every matching pair",
      defaults: {"gridSize": 4, "timeLimit": 120000, "maxAttempts": 0} },
    { show: true, id: "memorycolors", title: "Memory Shapes", hint: "Memorize the shapes, then count them",
      defaults: {"gridSize": 5, "memorizeTime": 5000, "answerTime": 10000, "rounds": 3} },
    { show: true, id: "untangle", title: "Untangle", hint: "Drag nodes until no lines cross",
      defaults: {"nodeCount": 8, "timeLimit": 60000} },
    { show: true, id: "fingerprint", title: "Fingerprint", hint: "Align the rows to complete the print",
      defaults: {"timeLimit": 30000, "showAlignedCount": true, "showCorrectIndicator": true} },
    { show: true, id: "codecrack", title: "Code Crack", hint: "Crack the PIN",
      defaults: {"timeLimit": 60000, "digitCount": 4, "maxAttempts": 6} },
    { show: true, id: "wordcrack", title: "Word Crack", hint: "Guess the password",
      defaults: {"timeLimit": 120000, "wordLength": 5, "maxAttempts": 6, "wordList": {}} },
    { show: true, id: "balance", title: "Balance", hint: "Keep the needle in the safe zone",
      defaults: {"timeLimit": 10000, "driftSpeed": 3, "sensitivity": 8, "greenZoneWidth": 30, "yellowZoneWidth": 25, "driftRandomness": 2, "maxDangerTime": 1000} },
    { show: true, id: "aimtest", title: "Target Lock", hint: "Click the targets before they vanish",
      defaults: {"timeLimit": 30000, "targetsToHit": 10, "targetLifetime": 1500, "targetSize": 60, "shrinkTarget": true, "maxMisses": 5, "timePenalty": 0} },
    { show: true, id: "circleclick", title: "Circle Click", hint: "Press the key when the segment hits the zone",
      defaults: {"rounds": 5, "rotationSpeed": 2, "targetZoneSize": 45, "maxFailures": 3, "speedIncrease": 0.15, "randomizeDirection": true, "keys": ["W", "A", "S", "D"]} },
    { show: true, id: "picklock", title: "Pick Lock", hint: "Feel for the sweet spot, then hold to set",
      defaults: {"rounds": 3, "sweetSpotSize": 30, "maxFailures": 2, "shakeRange": 40, "lockTime": 500} },
    { show: true, id: "path", title: "Route Trace", hint: "Memorize the route, then walk it",
      defaults: {"gridSize": 10, "lives": 3, "timeLimit": 10000, "pathTimeout": 5000} },
    { show: true, id: "spot", title: "Decrypt", hint: "Click the matching symbol",
      defaults: {"gridSize": 6, "timeLimit": 8000, "charSet": "braille", "required": 2} },
    { show: true, id: "math", title: "Firewall Bypass", hint: "Solve the number grid",
      defaults: {"timeLimit": 300000} },
    { show: true, id: "simonsays", title: "Access Sequence", hint: "Repeat the sequence",
      defaults: {"buttonGrid": 6, "length": 5} },
    { show: true, id: "pincrack", title: "Password Crack", hint: "Crack the 4 digit code",
      defaults: {"timeLimit": 30000} },
    { show: true, id: "dot", title: "Sequence Lock", hint: "Follow the dot",
      defaults: {"timeLimit": 15000} },
    { show: true, id: "flappy", title: "Data Stream", hint: "Fly through the gaps",
      defaults: {"targetScore": 25} },
    { show: true, id: "mathtempo", title: "Breach Protocol", hint: "Answer on the line",
      defaults: {"targetHeight": 30, "targetScore": 5, "speed": 3, "maxMisses": 3, "initialSpawnRate": 1000, "minSpawnRate": 300} },
    { show: true, id: "wires", title: "Wire Match", hint: "Connect matching symbols",
      defaults: {"pairs": 5, "lives": 3, "timeLimit": 20000, "memorizeTime": 3000, "scramble": 8} },
    { show: true, id: "lockpick", title: "Lock Pick", hint: "Hit the zone as the needle passes",
      defaults: {"pins": 4, "lives": 3, "speed": 220, "zone": 40, "shrink": 6} },
    { show: true, id: "bitflip", title: "Bit Flip", hint: "Set the switches to match the number",
      defaults: {"rounds": 4, "bits": 6, "timeLimit": 8000, "lives": 2} },
    { show: true, id: "logicgates", title: "Logic Gates", hint: "Flip the switches to light the output",
      defaults: {"inputs": 5, "inverters": 1, "rounds": 3, "timeLimit": 25000, "maxMoves": 8} },
    { show: true, id: "targetnumber", title: "Target Number", hint: "Merge the numbers to reach the target",
      defaults: {"numbers": 4, "rounds": 3, "lives": 3, "timeLimit": 60000, "maxNumber": 12, "undoPenalty": 5000, "resetPenalty": 10000} },
    { show: true, id: "echobeat", title: "Echo Beat", hint: "Tap the rhythm back",
      defaults: {"rounds": 3, "beats": 4, "bpm": 90, "tolerance": 150, "maxMisses": 3} },
    { show: true, id: "latinsquare", title: "Latin Square", hint: "Each digit once per row and column",
      defaults: {"gridSize": 5, "givens": 11, "maxMistakes": 3, "timeLimit": 60000} },
    { show: true, id: "lightsout", title: "Lights Out", hint: "Switch off every light",
      defaults: {"gridSize": 5, "rounds": 3, "scramble": 6, "maxMoves": 10, "timeLimit": 30000} },
    { show: true, id: "colorsort", title: "Color Sort", hint: "Sort the tokens by color",
      defaults: {"colors": 4, "extraTubes": 2, "rounds": 2, "scramble": 16, "maxMoves": 24, "timeLimit": 60000, "undoPenalty": 5000, "resetPenalty": 10000, "symbols": true, "colorblind": false} },
    { show: true, id: "cipherdecode", title: "Cipher Decode", hint: "Decode the word with the key",
      defaults: {"rounds": 3, "wordLength": 5, "cipher": "mixed", "backwards": "random", "layers": 1, "maxMistakes": 3, "timeLimit": 60000} },
    { show: true, id: "sumgrid", title: "Sum Grid", hint: "Make every row and column add up",
      defaults: {"gridSize": 4, "blanks": 8, "maxMistakes": 3, "timeLimit": 90000} },
    { show: true, id: "compactorload", title: "Compactor Load", hint: "Fit every bag into the truck bed",
      defaults: {"cols": 6, "rows": 4, "bags": 5, "rounds": 2, "timeLimit": 45000, "rotate": true, "symbols": true, "colorblind": false} },
    { show: true, id: "jackhammer", title: "Jackhammer Rhythm", hint: "Strike when the marker is in the zone",
      defaults: {"strikes": 8, "maxMisses": 3, "speed": 1.1, "speedUp": 0.1, "zone": 20, "shrink": 1, "minZone": 10, "timeLimit": 20000} },
    { show: true, id: "moppath", title: "Mop Path", hint: "Mop every spill. Avoid signs and mopped tiles",
      defaults: {"cols": 7, "rows": 5, "spills": 8, "signs": 4, "lives": 3, "timeLimit": 40000} },
    { show: true, id: "wastesort", title: "Sort the Waste", hint: "Send each item to the right bin before it hits the floor",
      defaults: {"items": 20, "lives": 3, "fall": 5, "speedUp": 0.1, "minFall": 2.5, "timeLimit": 50000} },
    { show: true, id: "addressmatch", title: "Address Match", hint: "Pick the mailbox that matches the address",
      defaults: {"rounds": 3, "choices": 4, "lives": 2, "timeLimit": 7000} },
    { show: true, id: "tracesplice", title: "Trace Splice", hint: "Guide the probe along the trace without touching its edges",
      defaults: {"width": 10, "length": 100, "checkpoints": 0, "liveSegments": 4, "lives": 3, "timeLimit": 30000} },
    { show: true, id: "intercept", title: "Intercept", hint: "Press Space the moment the carrier spike appears. Ignore the decoys",
      defaults: {"rounds": 6, "lives": 3, "windowMs": 300, "decoys": 0.35, "minDelay": 800, "maxDelay": 2500} },
    { show: true, id: "echopath", title: "Echo Path", hint: "Remember the path. You are told how to enter it afterwards",
      defaults: {"size": 4, "length": 3, "rounds": 1, "lives": 2, "showMs": 550, "gapMs": 150, "timeLimit": 60000} },
    { show: true, id: "streamtally", title: "Stream Tally", hint: "Watch the stream. You are asked what passed afterwards",
      defaults: {"symbols": 3, "interval": 1000, "duration": 5000, "questions": 3, "lives": 2, "timeLimit": 45000} },
    { show: true, id: "packetrecall", title: "Packet Recall", hint: "Remember the packets. You are told which ones to enter afterwards",
      defaults: {"length": 4, "ask": 3, "symbols": 6, "rounds": 3, "lives": 2, "showMs": 600, "gapMs": 200, "timeLimit": 75000} },
    { show: true, id: "rackslide", title: "Rack Slide", hint: "Slide the modules until the drive can leave through the port",
      defaults: {"blocks": 9, "minMoves": 6, "maxMoves": 10, "rounds": 1, "timeLimit": 60000} },
    { show: true, id: "accessmatrix", title: "Access Matrix", hint: "Fill the cells the row and column numbers describe",
      defaults: {"size": 6, "density": 0.55, "maxMistakes": 3, "timeLimit": 90000} },
    { show: true, id: "nodesweep", title: "Node Sweep", hint: "Each number counts the nodes around it. Open every safe cell",
      defaults: {"size": 8, "nodes": 10, "lives": 2, "timeLimit": 90000} },
    { show: true, id: "gelmatch", title: "Gel Match", hint: "Pick the lane that matches the sample",
      defaults: {"rounds": 3, "lanes": 4, "bands": 5, "lives": 2, "timeLimit": 35000} },
    { show: true, id: "striation", title: "Striation Match", hint: "Align and focus the striations, then hold",
      defaults: {"rounds": 2, "marks": 12, "tolerance": 3, "holdMs": 1500, "timeLimit": 40000} },
    { show: true, id: "spectrum", title: "Residue Spectrum", hint: "Match the peaks, then lock the reading",
      defaults: {"peaks": 3, "passScore": 85, "timeLimit": 30000} },
  ],

  // ------------------------------ CO-OP MINIGAMES ---------------------------
  coop: [
    { show: true, id: "splitkeypad", title: "Split Keypad",
      defaults: {"stages": 3, "length": 4, "cards": 4, "lives": 3, "timeLimit": 90000} },
    { show: true, id: "twindials", title: "Twin Dials",
      defaults: {"stages": 3, "ticks": 20, "lives": 3, "window": 1500, "timeLimit": 60000} },
    { show: true, id: "blindmaze", title: "Blind Maze",
      defaults: {"stages": 2, "size": 7, "lasers": 4, "lives": 3, "timeLimit": 120000} },
    { show: true, id: "relaysum", title: "Relay Sum",
      defaults: {"stages": 3, "cards": 6, "steps": 3, "cap": 50, "lives": 3, "timeLimit": 90000} },
    { show: true, id: "wiremanual", title: "Wire Manual",
      defaults: {"stages": 3, "wires": 5, "cuts": 2, "rules": 5, "lives": 3, "timeLimit": 120000} },
    { show: true, id: "chaincustody", title: "Chain of Custody",
      defaults: {"stages": 3, "length": 4, "lives": 3, "timeLimit": 150000} },
    { show: true, id: "crossedcontrols", title: "Crossed Controls",
      defaults: {"stages": 2, "size": 4, "scramble": 3, "slack": 4, "lives": 3, "timeLimit": 90000} },
    { show: true, id: "pressurevalves", title: "Pressure Valves",
      defaults: {"stages": 2, "gauges": 2, "valves": 2, "steps": 4, "tol": 1, "lives": 3, "timeLimit": 120000} },
    { show: true, id: "mirrorbeam", title: "Mirror Beam",
      defaults: {"stages": 2, "width": 7, "height": 5, "mirrors": 8, "alarms": 3, "slack": 3, "lives": 3, "timeLimit": 120000} },
    { show: true, id: "frequencyhop", title: "Frequency Hop",
      defaults: {"jams": 4, "hopMs": 12000, "tags": 4, "lives": 3, "timeLimit": 90000} },
    { show: true, id: "packetfilter", title: "Packet Filter",
      defaults: {"packets": 12, "blocks": 4, "lives": 3, "timeLimit": 150000} },
    { show: true, id: "spoofdrift", title: "Spoof Drift",
      defaults: {"stages": 2, "blocksX": 4, "blocksY": 3, "cameras": 4, "oneways": 3, "straight": 4, "lives": 3, "timeLimit": 120000} },
    { show: true, id: "guardroster", title: "Guard Roster",
      defaults: {"stages": 1, "guards": 4, "lives": 3, "timeLimit": 240000} },
    { show: true, id: "pixellock", title: "Pixel Lock",
      defaults: {"stages": 1, "size": 8, "lives": 3, "timeLimit": 180000} },
  ]
};
