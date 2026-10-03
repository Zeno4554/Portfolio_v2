export type SolarStageId =
  | "solar-panel"
  | "esp8266"
  | "sensor-collection"
  | "aws-iot-core"
  | "telemetry-stream"
  | "data-storage"
  | "ml-prediction"
  | "power-analytics"
  | "dashboard";

export const SOLAR_STAGES: [SolarStageId, ...SolarStageId[]] = [
  "solar-panel",
  "esp8266",
  "sensor-collection",
  "aws-iot-core",
  "telemetry-stream",
  "data-storage",
  "ml-prediction",
  "power-analytics",
  "dashboard",
];

export const stageDurations: Record<SolarStageId, number> = {
  "solar-panel": 400,
  esp8266: 380,
  "sensor-collection": 320,
  "aws-iot-core": 420,
  "telemetry-stream": 300,
  "data-storage": 360,
  "ml-prediction": 520,
  "power-analytics": 340,
  dashboard: 280,
};

export const stageLogs: Record<SolarStageId, string> = {
  "solar-panel": "Reading panel output and verifying solar irradiance.",
  esp8266: "ESP8266 packages telemetry and transmits to AWS IoT Core.",
  "sensor-collection": "Collecting irradiance, current, voltage, and temperature samples.",
  "aws-iot-core": "Authenticating device and routing MQTT payloads into the cloud.",
  "telemetry-stream": "Streaming telemetry into storage and processing pipelines.",
  "data-storage": "Persisting time-series solar data for analytics and historical trends.",
  "ml-prediction": "Generating energy forecasts with the Python ML pipeline.",
  "power-analytics": "Computing efficiency metrics and alerting on performance drift.",
  dashboard: "Updating the Power BI report with live energy insights.",
};
