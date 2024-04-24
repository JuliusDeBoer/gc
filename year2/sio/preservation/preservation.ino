#define L1 2
#define L2 3
#define L3 4
#define L4 5

int state;

void setup() {
	pinMode(L1, OUTPUT);
	pinMode(L2, OUTPUT);
	pinMode(L3, OUTPUT);
	pinMode(L4, OUTPUT);

	if (state > 4 || state < 1) {
		state = 1;
	} else {
		state += 1;
	}

	digitalWrite(L1, state == 1);
	digitalWrite(L2, state == 2);
	digitalWrite(L3, state == 3);
	digitalWrite(L4, state == 4);
}

void loop() {

}
