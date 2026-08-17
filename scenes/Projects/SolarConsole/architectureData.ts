export interface GraphNode {
  id: string;
  title: string;
  layer: "source" | "edge" | "cloud" | "analytics" | "dashboard";
  column: "source" | "edge" | "cloud" | "analytics" | "dashboard";
  row: number;

  description: string;
  folder: string;
  files: string[];
  input: string;
  output: string;
  latency: string;
}

export interface GraphEdge {
  from: string;
  to: string;
}

export const graphNodes: GraphNode[] = [
  {
    id: "solar-panel",
    title: "Solar Panel",
    layer: "source",
    column: "source",
    row: 0,
    description:
      "Photovoltaic cells generate DC power and provide the initial energy source for the IoT system.",
    folder: "firmware/solar",
    files: ["solar_sensor.ino", "wiring_diagram.png"],
    input: "Sunlight",
    output: "DC voltage",
    latency: "N/A",
  },
  {
    id: "esp8266",
    title: "ESP8266",
    layer: "edge",
    column: "edge",
    row: 0,
    description:
      "Firmware on the ESP8266 reads solar telemetry, formats MQTT payloads, and forwards sensor data to AWS IoT Core.",
    folder: "firmware/esp8266",
    files: ["main.ino", "mqtt_credentials.h"],
    input: "Voltage / current readings",
    output: "MQTT telemetry messages",
    latency: "< 250ms",
  },
  {
    id: "sensor-collection",
    title: "Sensor Collection",
    layer: "edge",
    column: "edge",
    row: 1,
    description:
      "Analog and digital sensors capture irradiance, current, voltage, and temperature data for solar panel monitoring.",
    folder: "firmware/sensors",
    files: ["sensor_reader.cpp", "sensor_schema.json"],
    input: "Physical sensor signals",
    output: "Structured telemetry",
    latency: "< 100ms",
  },
  {
    id: "aws-iot-core",
    title: "AWS IoT Core",
    layer: "cloud",
    column: "cloud",
    row: 0,
    description:
      "Securely ingests MQTT telemetry from devices, authenticates the ESP8266, and routes data into the AWS analytics pipeline.",
    folder: "aws-iot",
    files: ["thing-policy.json", "iot-rule.yaml"],
    input: "MQTT telemetry",
    output: "IoT message stream",
    latency: "100-300ms",
  },
  {
    id: "telemetry-stream",
    title: "Telemetry Stream",
    layer: "cloud",
    column: "cloud",
    row: 1,
    description:
      "Telemetry is streamed from AWS IoT into downstream storage and function triggers for processing and archival.",
    folder: "aws-iot/stream",
    files: ["stream-config.json", "kinesis_policy.json"],
    input: "IoT messages",
    output: "Raw telemetry storage",
    latency: "200-400ms",
  },
  {
    id: "data-storage",
    title: "Data Storage",
    layer: "cloud",
    column: "cloud",
    row: 2,
    description:
      "Time-series and historical telemetry data are persisted for analytics, training, and dashboard queries.",
    folder: "aws-iot/storage",
    files: ["storage-schema.sql", "s3_ingest.py"],
    input: "Telemetry stream",
    output: "Persisted dataset",
    latency: "N/A",
  },
  {
    id: "ml-prediction",
    title: "ML Prediction",
    layer: "analytics",
    column: "analytics",
    row: 0,
    description:
      "Python models forecast solar energy production, detect anomalies, and provide predictive load analysis.",
    folder: "ml-pipeline",
    files: ["predict.py", "model.pkl", "requirements.txt"],
    input: "Historical telemetry",
    output: "Energy forecasts",
    latency: "1-2s",
  },
  {
    id: "power-analytics",
    title: "Power Analytics",
    layer: "analytics",
    column: "analytics",
    row: 1,
    description:
      "Analytics pipelines transform predictions into efficiency metrics, performance KPIs, and energy optimization insights.",
    folder: "analytics",
    files: ["analytics_engine.py", "dashboard_metrics.py"],
    input: "Predictions",
    output: "Operational insights",
    latency: "250-500ms",
  },
  {
    id: "dashboard",
    title: "Power BI Dashboard",
    layer: "dashboard",
    column: "dashboard",
    row: 0,
    description:
      "A Power BI visualization surface presents live telemetry, predictive energy forecasts, and solar performance dashboards.",
    folder: "grafana",
    files: ["dashboard.pbix", "dashboard_config.json"],
    input: "Analytics metrics",
    output: "Executive reporting",
    latency: "Real-time",
  },
];

export const graphEdges: GraphEdge[] = [
  { from: "solar-panel", to: "esp8266" },
  { from: "esp8266", to: "sensor-collection" },
  { from: "sensor-collection", to: "aws-iot-core" },
  { from: "aws-iot-core", to: "telemetry-stream" },
  { from: "telemetry-stream", to: "data-storage" },
  { from: "data-storage", to: "ml-prediction" },
  { from: "ml-prediction", to: "power-analytics" },
  { from: "power-analytics", to: "dashboard" },
];
