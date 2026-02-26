import ExpoModulesCore
import UIKit

class AvatarView: ExpoView {
  private var avatarSize: CGFloat = 120
  private var avatarColor: UIColor = .systemGray
  private let avatarContainer = UIView()
  private let initialsLabel = UILabel()
  var name: String = "" {
    didSet {
      avatarColor = generateRandomColor()
      updateAppearance()
    }
  }
  var size: CGFloat = 120 {
    didSet {
      avatarSize = size > 0 ? size : 120
      setNeedsLayout()
      updateAppearance()
    }
  }

  required init(appContext: AppContext? = nil) {
    super.init(appContext: appContext)
    clipsToBounds = false

    avatarContainer.clipsToBounds = true
    avatarContainer.layer.borderWidth = 6
    avatarContainer.layer.borderColor = UIColor.white.cgColor
    initialsLabel.textAlignment = .center
    initialsLabel.textColor = .white
    initialsLabel.font = .systemFont(ofSize: 22, weight: .regular)

    avatarContainer.addSubview(initialsLabel)
    addSubview(avatarContainer)
    avatarColor = generateRandomColor()
    updateAppearance()
  }

  override func layoutSubviews() {
    super.layoutSubviews()
    avatarContainer.frame = CGRect(
      x: (bounds.width - avatarSize) / 2,
      y: (bounds.height - avatarSize) / 2,
      width: avatarSize,
      height: avatarSize
    )
    avatarContainer.layer.cornerRadius = avatarSize / 2
    initialsLabel.frame = avatarContainer.bounds
    initialsLabel.font = .systemFont(ofSize: avatarSize / 3, weight: .regular)
  }

  private func updateAppearance() {
    initialsLabel.text = getInitialsFromName(name)
    avatarContainer.backgroundColor = avatarColor
    avatarContainer.layer.borderWidth = max(4, avatarSize * 0.05)
  }

  private func getInitialsFromName(_ name: String) -> String {
    if name.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty {
      return ""
    }

    let parts = name
      .trimmingCharacters(in: .whitespacesAndNewlines)
      .components(separatedBy: " ")
      .filter { !$0.isEmpty }

    let first = parts.first?.prefix(1) ?? ""
    let second = parts.count > 1 ? parts[1].prefix(1) : ""

    return "\(first)\(second)".uppercased()
  }

  private func generateRandomColor() -> UIColor {
    let hue = CGFloat.random(in: 0...1)
    return UIColor(hue: hue, saturation: 0.55, brightness: 0.78, alpha: 1.0)
  }
}