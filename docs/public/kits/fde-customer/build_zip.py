"""Rebuild the public teaching kit deterministically; no network or dependencies."""

from pathlib import Path
from zipfile import ZIP_DEFLATED, ZipFile, ZipInfo


def build():
    """Package only the expected text sources under one customer-kit folder."""
    root = Path(__file__).resolve().parent
    names = [
        "AGENTS.md",
        "CUSTOMER-NOTES.md",
        "FACILITATOR-CHECK.md",
        "README.md",
        "build_zip.py",
        "scenarios/clinic-supplies.md",
        "scenarios/repair-shop.md",
        "scenarios/volunteer-coordination.md",
    ]
    destination = root / "is218-fde-customer-kit.zip"
    with ZipFile(destination, "w", compression=ZIP_DEFLATED, compresslevel=9) as archive:
        for name in sorted(names):
            source = root / name
            if not source.is_file() or source.is_symlink():
                raise ValueError(f"Expected an ordinary source file: {name}")
            entry = ZipInfo(f"customer-kit/{name}", date_time=(2026, 11, 3, 0, 0, 0))
            entry.compress_type = ZIP_DEFLATED
            entry.create_system = 3
            entry.external_attr = 0o100644 << 16
            archive.writestr(entry, source.read_bytes(), compresslevel=9)
    with ZipFile(destination) as archive:
        if archive.testzip() is not None or len(archive.namelist()) != len(names):
            raise ValueError("Archive integrity verification failed")
    print(f"Built {destination.name}: {len(names)} text files")


if __name__ == "__main__":
    build()
