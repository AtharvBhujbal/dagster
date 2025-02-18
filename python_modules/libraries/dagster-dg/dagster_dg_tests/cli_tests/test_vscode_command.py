from pathlib import Path
from tempfile import TemporaryDirectory
from unittest import mock

import pytest
from dagster_dg.utils import ensure_dagster_dg_tests_import

ensure_dagster_dg_tests_import()

from dagster_dg_tests.utils import ProxyRunner, isolated_example_code_location_foo_bar


def mock_vscode_cli_command(editor, args: list[str]) -> bytes:
    return b"redhat.vscode-yaml"


@pytest.mark.parametrize("editor", ["vscode", "cursor"])
def test_configure_editor(editor: str) -> None:
    with (
        ProxyRunner.test() as runner,
        TemporaryDirectory() as extension_dir,
        mock.patch("dagster_dg.utils.editor.run_editor_cli_command", new=mock_vscode_cli_command),
        mock.patch(
            "dagster_dg.utils.editor.get_default_extension_dir",
            return_value=Path(extension_dir),
        ),
        isolated_example_code_location_foo_bar(runner, False),
    ):
        out = runner.invoke("code-location", "configure-editor", editor)

        assert out.exit_code == 0

        sample_project_dg_path = Path.cwd() / ".dg"
        assert (sample_project_dg_path / "schema.json").exists()

        expected_vscode_plugin_folder_filepath = Path(extension_dir) / "dagster-components-schema"
        assert expected_vscode_plugin_folder_filepath.exists()
        expected_compiled_plugin_filepath = (
            expected_vscode_plugin_folder_filepath / "dagster-components-schema.vsix"
        )
        assert expected_compiled_plugin_filepath.exists()


def test_generate_component_schema() -> None:
    with (
        ProxyRunner.test() as runner,
        isolated_example_code_location_foo_bar(runner, False),
    ):
        out = runner.invoke("code-location", "generate-component-schema")

        assert out.exit_code == 0

        sample_project_dg_path = Path.cwd() / ".dg"
        assert (sample_project_dg_path / "schema.json").exists()

        assert (
            "definitions@dagster_components" in (sample_project_dg_path / "schema.json").read_text()
        )
