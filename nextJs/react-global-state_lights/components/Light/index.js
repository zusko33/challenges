import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ light, onLight, onToggle }) {
  return (
    <LightButton
      type="button"
      onClick={() => {
        onLight(light.id);
      }}
      onToggle={() => onToggle(light.id)}
    >
      <Icon isOn={light.isOn}>💡</Icon>
      <Text>
        <Name>{light.name}</Name>
        <State>{light.isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
