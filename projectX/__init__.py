from .core import hello_world

__all__ = ["hello_world"]

assert __all__ == sorted(__all__), f"__all__ needs to be sorted into {sorted(__all__)}!"
