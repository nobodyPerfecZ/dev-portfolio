from .func import add

__all__ = ["add"]

assert __all__ == sorted(__all__), f"__all__ needs to be sorted into {sorted(__all__)}!"
