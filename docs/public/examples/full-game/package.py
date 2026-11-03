"""Rebuild the public ZIP from an explicit, clean source allowlist."""
from io import BytesIO
from pathlib import Path
import sys
from zipfile import ZipFile, ZipInfo, ZIP_DEFLATED

ROOT = Path(__file__).resolve().parent
ROOT_FILES = [".gitignore", "README.md", "PROJECT-RECORD.md", "TEST-NOTES.md", "requirements.txt", "pytest.ini", "setup.sh", "run.sh"]
files = [ROOT / name for name in ROOT_FILES]
files += [path for folder in ("app", "tests") for path in (ROOT / folder).rglob("*") if path.is_file() and path.suffix in {".py", ".css", ".html", ".jinja"}]
buffer = BytesIO()
with ZipFile(buffer, "w", compression=ZIP_DEFLATED) as archive:
    for path in sorted(files):
        relative = path.relative_to(ROOT).as_posix()
        entry = ZipInfo("bot-lab/" + relative, date_time=(2026, 11, 3, 0, 0, 0))
        entry.compress_type = ZIP_DEFLATED
        entry.external_attr = 0o644 << 16
        archive.writestr(entry, path.read_bytes())
result = buffer.getvalue()
destination = ROOT / "bot-lab-source.zip"
if "--check" in sys.argv:
    if not destination.exists() or destination.read_bytes() != result:
        raise SystemExit("ZIP differs from source. Run python -B package.py, then check again.")
    print(f"Source ZIP verified: {len(files)} clean files")
else:
    destination.write_bytes(result)
    print(f"Built {destination.name}: {len(files)} files, {len(result)} bytes")
