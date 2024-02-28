#define OUTPUT_PIN 2

void setup() {
	pinMode(OUTPUT_PIN, OUTPUT);
}

void loop() {
	digitalWrite(OUTPUT_PIN, HIGH);
	delay(1000);
	digitalWrite(OUTPUT_PIN, LOW);
	delay(1000);
}
