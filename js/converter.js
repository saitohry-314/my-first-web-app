// ここからコードを書いてください
export function setupConverter() {
  const converter_input = document.getElementById("converter-input");
  const input_value = parseFloat(converter_input.value);
  const converter_from = document.getElementById("form-from");
  const from_value = converter_from.value;
  const converter_to = document.getElementById("form-to");
  const to_value = converter_to.value;
  const convert_result = input_value / 1000;
  document.getElementById("convert-result").textContent =
    input_value + from_value + "=" + convert_result + to_value;
}

// export default setupTabs;
