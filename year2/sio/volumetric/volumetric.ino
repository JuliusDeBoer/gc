// Rows
#define R1 2
#define R2 3
#define R3 4
#define R4 5
#define R5 6
#define R6 7
#define R7 8
#define R8 9

// Columns
#define C1 10
#define C2 11
#define C3 12
#define C4 13
// You can use analog pins as digital
#define C5 14 // A0
#define C6 15 // A1
#define C7 16 // A2
#define C8 17 // A3

// Microphone
#define MIC A5

// Enable testing
#if 0 // Testing
#define LOOP _loop
#define TEST_LOOP loop
#else // Normal
#define LOOP loop
#define TEST_LOOP _loop
#endif

void clear() {
	digitalWrite(R1, LOW);
	digitalWrite(R2, LOW);
	digitalWrite(R3, LOW);
	digitalWrite(R4, LOW);
	digitalWrite(R5, LOW);
	digitalWrite(R6, LOW);
	digitalWrite(R7, LOW);
	digitalWrite(R8, LOW);

	digitalWrite(C1, LOW);
	digitalWrite(C2, LOW);
	digitalWrite(C3, LOW);
	digitalWrite(C4, LOW);
	digitalWrite(C5, LOW);
	digitalWrite(C6, LOW);
	digitalWrite(C7, LOW);
	digitalWrite(C8, LOW);
}

void write(int x, int y) {
	clear();

	digitalWrite(R1, x == 1);
	digitalWrite(R2, x == 2);
	digitalWrite(R3, x == 3);
	digitalWrite(R4, x == 4);
	digitalWrite(R5, x == 5);
	digitalWrite(R6, x == 6);
	digitalWrite(R7, x == 7);
	digitalWrite(R8, x == 8);

	digitalWrite(C1, y == 1);
	digitalWrite(C2, y == 2);
	digitalWrite(C3, y == 3);
	digitalWrite(C4, y == 4);
	digitalWrite(C5, y == 5);
	digitalWrite(C6, y == 6);
	digitalWrite(C7, y == 7);
	digitalWrite(C8, y == 8);
}

void* state;

void* stateA() {
	return *stateB;
}

void* stateB() {
	return *stateA;
}

void setup() {
	pinMode(R1, OUTPUT);
	pinMode(R2, OUTPUT);
	pinMode(R3, OUTPUT);
	pinMode(R4, OUTPUT);
	pinMode(R5, OUTPUT);
	pinMode(R6, OUTPUT);
	pinMode(R7, OUTPUT);
	pinMode(R8, OUTPUT);

	pinMode(C1, OUTPUT);
	pinMode(C2, OUTPUT);
	pinMode(C3, OUTPUT);
	pinMode(C4, OUTPUT);
	pinMode(C5, OUTPUT);
	pinMode(C6, OUTPUT);
	pinMode(C7, OUTPUT);
	pinMode(C8, OUTPUT);

	pinMode(MIC, INPUT);

	state = *stateA;
}

void LOOP() {
	// Evil cast
	state = ((void*(*)())state)();
}

void TEST_LOOP() {

}
